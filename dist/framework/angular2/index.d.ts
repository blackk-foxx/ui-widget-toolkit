// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../@angular/core
//   ../ui-widget-toolkit

import { DoCheck, OnChanges, EventEmitter } from '@angular/core';
import * as UWT from 'ui-widget-toolkit';
import { OnChanges } from '@angular/core';

export class UWTCheckboxTreeNodeImpl implements OnChanges, DoCheck {
        def: UWT.ICheckboxTreeNode;
        onCheckChanged: EventEmitter<any>;
        onCheckCompleted: EventEmitter<any>;
        id: any;
        /**
            * Called whenever the data is changed to notify the lower nodes.
            */
        ngOnChanges(): void;
        ngDoCheck(): void;
        _emitCheckChanged($event: any): void;
        _emitCheckCompleted($event: any): void;
        _onCheckChanged($event: any): void;
        handleCheckChanged($event: any): void;
        _updateChildCheckBox(nodeData: any, checked: boolean): void;
        _updateParentCheckBox(parentData: any): void;
        _initializeChildren(node: UWT.ICheckboxTreeNode): void;
        /**
            * Returns the necessary classes.
            *
            * @return {string} The class name indicating whether the node is open or closed
            */
        _computeClass(): string;
        _computePadding(): {
                'padding-left'?: undefined;
        } | {
                'padding-left': string;
        };
        /**
            * Returns the parent tree node. Returns `null` if root.
            */
        getParent(): UWT.ICheckboxTreeNode;
        /**
            * Returns the children tree nodes.
            */
        getChildren(): UWT.ICheckboxTreeNode[];
        /**
            * Display/Hide the children nodes.
            */
        toggleChildren(): void;
}
export class UWTCheckboxTree {
        data: UWT.ICheckboxTreeNode;
        onCheckChanged: EventEmitter<any>;
        onCheckCompleted: EventEmitter<any>;
        _onCheckChanged($event: any): void;
        _onCheckCompleted($event: any): void;
}
export class UWTCheckboxTreeModule {
}

export class UWTChart implements OnChanges {
    chartTitle: string;
    chartDef: UWT.ICartesianChart;
    renderOptions: UWT.IOptions;
    colorManager: UWT.ColorManager;
    renderer: UWT.UIRenderer;
    onRender: () => void;
    chartElem: any;
    ngOnChanges(changes: any): void;
}
export class UWTSwimlaneChart {
    chartTitle: string;
    chartDefs: UWT.ICartesianChart[];
    renderOptions: UWT.IOptions;
    colorManager: UWT.ColorManager;
    renderer: UWT.UIRenderer;
    onRender: () => void;
    chartElem: any;
    getChartOptions: (index: number) => any;
    ngOnChanges(changes: any): void;
}
export class UWTPieChart implements OnChanges {
    chartTitle: string;
    chartDef: UWT.IPieChart;
    renderOptions: UWT.IOptions;
    colorManager: UWT.ColorManager;
    renderer: UWT.UIRenderer;
    onRender: () => void;
    chartElem: any;
    ngOnChanges(changes: any): void;
}
export class UWTRadarChart implements OnChanges {
    chartTitle: string;
    chartDef: UWT.IPieChart;
    renderOptions: UWT.IOptions;
    colorManager: UWT.ColorManager;
    renderer: UWT.UIRenderer;
    onRender: () => void;
    chartElem: any;
    ngOnChanges(changes: any): void;
}
export class UWTGrid implements OnChanges {
    gridTitle: string;
    gridDef: UWT.IGrid;
    gridStyle: any;
    gridClass: string[];
    colorManager: UWT.ColorManager;
    renderer: UWT.UIRenderer;
    onRender: () => void;
    gridElem: any;
    ngOnChanges(changes: any): void;
}
export class UWTFlowDiagram implements OnChanges {
    diagramTitle: string;
    diagramDef: UWT.IConnectedGraph;
    renderOptions: UWT.IOptions;
    colorManager: UWT.ColorManager;
    renderer: UWT.UIRenderer;
    onRender: () => void;
    diagramElem: any;
    ngOnChanges(changes: any): void;
}
export class UWTGraph implements OnChanges {
    graphTitle: string;
    graphDef: UWT.IConnectedGraph;
    renderOptions: UWT.IOptions;
    colorManager: UWT.ColorManager;
    renderer: UWT.UIRenderer;
    onRender: () => void;
    graphElem: any;
    ngOnChanges(changes: any): void;
}
export class UWTHierarchyGraph implements OnChanges {
    graphTitle: string;
    graphDef: UWT.IConnectedGraph;
    renderOptions: UWT.IOptions;
    colorManager: UWT.ColorManager;
    renderer: UWT.UIRenderer;
    onRender: () => void;
    graphElem: any;
    ngOnChanges(changes: any): void;
}
export class UWTSunburstChart implements OnChanges {
    chartTitle: string;
    chartDef: UWT.ICartesianChart;
    renderOptions: UWT.IOptions;
    colorManager: UWT.ColorManager;
    renderer: UWT.UIRenderer;
    onRender: () => void;
    chartElem: any;
    ngOnChanges(changes: any): void;
}
export class UWTAxis implements OnChanges {
    axisDef: UWT.IAxis;
    renderOptions: UWT.IOptions;
    renderer: UWT.UIRenderer;
    onRender: () => void;
    axisElem: any;
    ngOnChanges(changes: any): void;
}
export class UWTModule {
}

