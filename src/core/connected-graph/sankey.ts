import { IOptions, UIType, UIElement } from '../../interface/ui-base';
import { IConnectedGraph } from '../../interface/graph';
import { addClickHelper, D3SVGRenderer } from '../svg-helper';
import { D3Renderer } from '../renderer';

import * as d3 from 'd3';
import { sankey } from 'd3-sankey';

import { D3ConnectedGraphSVG } from './base';

export class D3SankeyDiagram extends D3ConnectedGraphSVG {
    /** the sankey object for this flow chart */
    private _sankey: any;

    constructor(element: UIElement, renderer: D3Renderer,
        parent: d3.Selection<any, any, d3.BaseType, any>) {

        super(element, renderer, parent);

        this._graphHelper.initializeGraph(element as IConnectedGraph);
    }

    protected renderLinks(graphArea: d3.Selection<any, any, d3.BaseType, any>):
        d3.Selection<any, any, d3.BaseType, any> {
        let self = this;
        let diagram = self._element as IConnectedGraph;

        var path = self._sankey.link();

        // add in the links
        var links = graphArea.append('g')
            .classed('links', true)
            .selectAll('.link')
            .data(diagram.links)
            .enter().append('path')
            .attr('class', function (d: any) { return d.from + '-' + d.to })
            .attr('d', path)
            .classed('link', true)
            .style('stroke-width', function (d: any) { return Math.max(1, d.dy); })
            .sort(function (a: any, b: any) { return b.dy - a.dy; })
            .on('mouseenter', self.linkHoverStart)
            .on('mouseleave', self.hoverEnd);

        addClickHelper(links, diagram.onClick, diagram.onDoubleClick, diagram.contextMenuItems,
            self._dataTooltip, diagram);
        self._dataTooltip.setTarget(links);

        return links;
    }

    protected renderNodes(graphArea: d3.Selection<any, any, d3.BaseType, any>,
        dragMove: (node: any) => void): d3.Selection<any, any, d3.BaseType, any> {

        let self = this;
        let diagram = self._element as IConnectedGraph;
        let width = this._options.width;

        var nodes = graphArea.append('g')
            .classed('nodes', true)
            .selectAll('.nodeGroup')
            .data(diagram.nodes)
            .enter().append('g')
            .classed('nodeGroup', true)
            .attr('transform', function (d: any) {
                return 'translate(' + d.x + ',' + d.y + ')';
            })
            .call((<any>d3).drag()
                .subject(function (d: any) {
                    return d;
                })
                .on('start', function () {
                    D3SVGRenderer.IS_RESIZING = true;
                    this.parentNode.appendChild(this);
                })
                .on('drag', dragMove)
                .on('end', function () {
                    D3SVGRenderer.IS_RESIZING = false;
                }));

        addClickHelper(nodes, diagram.onClick, diagram.onDoubleClick, diagram.contextMenuItems,
            self._dataTooltip, diagram);

        // add the rectangles for the nodes
        let colorMgr = self._renderer.getColorManager()
        nodes.append('rect')
            .attr('height', function (d: any) { return d.dy; })
            .attr('width', self._sankey.nodeWidth())
            .attr('class', function (d: any) {
                if (d.type) {
                    return d.type + ' ' + d.key;
                }
                return d.key
            })
            .classed('node', true)
            .style('fill', function (d: any) {
                if (d.type) {
                    return colorMgr.getColor(d.type);
                }

                return colorMgr.getColor(d.key);
            })
            .style('stroke', function (d: any): any {
                return d3.rgb(d.color).darker(2);
            })
            .on('mouseenter', self.nodeHoverStart)
            .on('mouseleave', self.hoverEnd);

        // add in the title for the nodes
        nodes.append('text')
            .attr('x', -6)
            .attr('y', function (d: any) { return d.dy / 2; })
            .attr('dy', '.35em')
            .attr('text-anchor', 'end')
            .attr('transform', null)
            .text(function (d: any) { return d.key; })
            .filter(function (d: any) { return d.x < width / 2; })
            .attr('x', 6 + self._sankey.nodeWidth())
            .attr('text-anchor', 'start');

        self._dataTooltip.setTarget(nodes);

        return nodes;
    }

    public render(options: IOptions) {
        let self = this;
        let diagram = self._element as IConnectedGraph;

        if (!this._options.height) {
            this._options.height = 400;
        }

        let width = this._options.width;
        let height = this._options.height;

        // Set the sankey diagram properties
        self._sankey = sankey()
            .size([width, height]);

        var path = self._sankey.link();

        this._sankey
            .nodes(diagram.nodes)
            .links(diagram.links)
            .layout(32);

        // add in the nodes
        // the function for moving the nodes
        function dragMove(d: any) {
            d3.select(this).attr('transform',
                'translate(' + (
                    d.x = Math.max(0, Math.min(width - d.dx, d3.event.x))
                )
                + ',' + (
                    d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))
                ) + ')');
            self._sankey.relayout();
            links.attr('d', path);
        }

        let graphArea = self.initializeGraphArea(options);
        let links = this.renderLinks(graphArea);
        this.renderNodes(graphArea, dragMove);
        this.renderLegend();

        self.configureViewSizeAndBrush(height, self._options.width);
    }
}
D3Renderer.register(UIType.FlowDiagram, D3SankeyDiagram);