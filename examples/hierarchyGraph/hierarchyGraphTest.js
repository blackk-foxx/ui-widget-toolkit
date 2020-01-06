/// <reference path='./data.ts' />
/// <reference path='../../dist/index.d.ts' />
var HierarchyGraphTest;
(function (HierarchyGraphTest) {
    window.onload = () => {
        TestBase.colorManager.setColor('pcie', 'red');
        TestBase.colorManager.setColor('socket-interconnect', 'purple');
        TestBase.colorManager.setColor('memchannel', 'green');
        TestBase.colorManager.setColor('Node0', 'rgb(192, 192, 192)');
        TestBase.colorManager.setColor('Node1', 'rgb(192, 0, 192)');
        TestBase.colorManager.setColor('Node2', 'rgb(0, 192, 192)');
        TestBase.colorManager.setColor('Node3', 'rgb(192,192, 0)');
        let graph = {
            links: hLinks,
            nodes: hRoot,
            type: UWT.UIType.HierarchyGraph,
            onClick: function (event) {
                console.log('hierarchy click');
                console.log(event.data);
                let isNode = event.data.key != undefined;
                if (isNode && event.data !== hRoot) {
                    graph.nodes = event.data;
                    graph.renderer.render(graph);
                }
            },
            onDoubleClick: function (event) {
                console.log('hierarchy double click');
                console.log(event.data);
            },
            contextMenuItems: [{
                    title: 'GraphMenuItem',
                    action(elem, data, index) {
                        console.log('index: ' + index);
                        console.log(data);
                        console.log(elem);
                    }
                }],
            onTooltip: function (event) {
                let tooltip = event.data.tooltip;
                let data = event.data.data;
                tooltip.clearTooltip();
                if (data.key) {
                    tooltip.getTooltipDiv().append(data.key);
                }
                if (data.from) {
                    tooltip.getTooltipDiv().append(data.from + ' ↔ ' + data.to + '\n');
                }
            }
        };
        let graph2 = {
            links: hLinks,
            nodes: hRoot,
            type: UWT.UIType.HierarchyGraph,
            onClick: function (event) {
                console.log('hierarchy click');
                console.log(event.data && event.data.key);
                let isNode = event.data.key != undefined;
                if (isNode && event.data !== hRoot2) {
                    graph2.nodes = event.data;
                    graph2.renderer.render(graph2);
                }
            },
            decimator: {
                isVisible: function (node) {
                    let depth = 0;
                    let parent = node;
                    while (parent) {
                        parent = parent.parent;
                        ++depth;
                    }
                    return depth < 3;
                }
            },
            onTooltip: function (event) {
                let tooltip = event.data.tooltip;
                let data = event.data.data;
                //using the MetricListTooltip setData call
                tooltip.setData('My Title', [{
                        source: undefined, group: 'foo',
                        metrics: {
                            key1: 'data1',
                            key2: 'data2'
                        }
                    }]);
            }
        };
        let graph3 = {
            links: hLinks,
            nodes: hRoot,
            type: UWT.UIType.HierarchyGraph,
            onClick: function (event) {
                console.log('hierarchy click');
                console.log(event.data);
                let isNode = event.data.key != undefined;
                if (isNode && event.data !== hRoot) {
                    graph3.nodes = event.data;
                    graph3.renderer.render(graph3);
                }
            },
            decimator: {
                isVisible: function (node) {
                    let depth = 0;
                    let parent = node;
                    while (parent) {
                        parent = parent.parent;
                        ++depth;
                    }
                    return depth < 4;
                }
            }
        };
        let graph4 = {
            links: hLinks,
            nodes: hRoot2,
            type: UWT.UIType.HierarchyGraph,
            onClick: function (event) {
                console.log('hierarchy click');
                console.log(event.data);
                let isNode = event.data.key != undefined;
                if (isNode && event.data !== hRoot2) {
                    graph4.nodes = event.data;
                    graph4.renderer.render(graph4);
                }
            }
        };
        let graph5 = {
            links: hLinks,
            nodes: hRoot3,
            type: UWT.UIType.HierarchyGraph,
            onClick: function (event) {
                console.log('hierarchy click');
                console.log(event.data);
                let isNode = event.data.key != undefined;
                if (isNode && event.data !== hRoot3) {
                    graph5.nodes = event.data;
                    graph5.renderer.render(graph5);
                }
            }
        };
        let graph6 = {
            links: [],
            nodes: {
                "key": "Socket 0Core 0",
                "label": "Core 0",
                "type": ["core"],
                "right": [{
                        "key": "Thread0",
                        "label": "HT# 0",
                        "type": ["thread_core"]
                    }, {
                        "key": "Thread36",
                        "label": "HT# 36",
                        "type": ["thread_core"]
                    }]
            },
            type: UWT.UIType.HierarchyGraph
        };
        TestBase.addElement(graph);
        TestBase.addElement(graph2);
        TestBase.addElement(graph3);
        TestBase.addElement(graph4);
        TestBase.addElement(graph5);
        TestBase.addElement(graph6);
        function goToRoot() {
            graph.nodes = hRoot;
            graph2.nodes = hRoot;
            graph3.nodes = hRoot;
            graph4.nodes = hRoot2;
            graph5.nodes = hRoot3;
            graph.api.render();
            graph2.api.render();
            graph3.api.render();
            graph4.api.render();
            graph5.api.render();
        }
        document.getElementById('goToRoot').addEventListener('click', goToRoot, false);
        TestBase.configureButtons();
        TestBase.render();
    };
})(HierarchyGraphTest || (HierarchyGraphTest = {}));
//# sourceMappingURL=hierarchyGraphTest.js.map