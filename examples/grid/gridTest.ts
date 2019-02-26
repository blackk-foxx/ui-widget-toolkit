/// <reference path='../../dist/index.d.ts' />
/// <reference path='../testBase.ts' />

module GridTest {
    window.onload = () => {
        TestBase.configureButtons();
        createView();
        TestBase.render();
    };

    export function createView() {
        {
            let grid = {
                type: UWT.UIType.Grid,
                gridOptions: {
                    columnDefs: [
                        { headerName: 'Make', field: 'make' },
                        { headerName: 'Model', field: 'model' },
                        { headerName: 'Price', field: 'price' }
                    ],
                    rowData: [
                        { make: 'Toyota', model: 'Celica', price: 35000 },
                        { make: 'Ford', model: 'Mondeo', price: 32000 },
                        { make: 'Porsche', model: 'Boxster', price: 72000 },
                        { make: 'Ferrari', model: 'California', price: 158000 },
                        { make: 'Nissan', model: 'GT-R', price: 105000 }
                    ]
                }
            }

            TestBase.elemManager.addElement(grid, 'group2', 'group2');
        }

        {
            let grid = {
                type: UWT.UIType.Grid,
                gridOptions: {
                    columnDefs: [
                        {
                            headerName: 'Car Info',
                            children: [
                                { headerName: 'Make', field: 'make' },
                                { headerName: 'Model', field: 'model' }
                            ]
                        },
                        {
                            headerName: 'Price \/ 10',
                            valueGetter: function (param: any) {
                                return param.data.price / 10;
                            }
                        }
                    ],
                    rowData: [
                        { make: 'data-0', model: 'Celica', price: 35000 },
                        { make: 'data-1', model: 'Mondeo', price: 32000 },
                        { make: 'data-2', model: 'Boxster', price: 72000 },
                        { make: 'Ferrari', model: 'California', price: 158000 },
                        { make: 'Nissan', model: 'GT-R', price: 105000 }
                    ],
                    onGridReady: function () {
                        (grid.gridOptions as any).api.sizeColumnsToFit();
                    },
                    onRowClicked: function (row: any) {
                        console.log(row)
                    },
                    contextMenuItems: [
                        { title: 'header' },
                        { divider: true },
                        {
                            title: 'First Item',
                            action: function (elem: any, data: any, index: any) {
                                console.log(elem);
                                console.log(data);
                                console.log(index);
                            }
                        }
                    ]
                }
            }

            TestBase.elemManager.addElement(grid, 'group2', 'group2');

            var columnDefs2 = [
                { headerName: "Make", field: "make" },
                { headerName: "Model", field: "model" },
                { headerName: "Price", field: "price" }
            ];

            var rowData2 = [
                { make: "data-0", model: "Celica", price: 35000, children: [{ make: "Pinto", model: "abc", price: 1200 }] },
                { make: "data-1", model: "Mondeo", price: 32000 },
                { make: "data-2", model: "Boxster", price: 72000 },
                { make: "Ferrari", model: "California", price: 158000 },
                { make: "Nissan", model: "GT-R", price: 105000 }
            ];

            var gridOptions2 = {
                columnDefs: columnDefs2,
                rowData: rowData2,
                enableSorting: true,
                animateRows: true,
                enableSingleKeyboardSelection: true
            };

            let gridDef2: UWT.IGrid = {
                type: UWT.UIType.Grid,
                gridOptions: gridOptions2
            };

            TestBase.elemManager.addElement(gridDef2, 'group2', 'group2');
        }
    }
}