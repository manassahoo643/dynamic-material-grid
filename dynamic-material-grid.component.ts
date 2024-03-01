import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Column } from '../column.type';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'lib-dynamic-material-grid',
  templateUrl: './dynamic-material-grid.component.html',
  styleUrls: ['./dynamic-material-grid.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DynamicMaterialGridComponent implements OnInit {
  url: string = '';
  urlArr: any = [];
  visibleColumns!: Column[];
  currentUser: any = '';

  // Shared Variables
  @Input() dataSource!: MatTableDataSource<any>;
  @Input() columnsdef!: Column[];
  @Output() searchFieldChanged = new EventEmitter<any>();
  @Output() viewButtonClicked = new EventEmitter<any>();
  @Output() editButtonClicked = new EventEmitter<any>();
  @Output() deleteButtonClicked = new EventEmitter<any>();
  @Output() SearchHistoryBtn = new EventEmitter<any>();
  @Output() pageButtonClicked = new EventEmitter<any>();
  @Output() currentPageButtonClicked = new EventEmitter<any>();
  @Output() paginationChanged = new EventEmitter<any>();

  // buttons inputs
  @Input() currentPage: any;
  @Input() pageSize: any = 25
  @Input() pageOptions: any = [10, 25, 50, 100]
  @Input() totalRecords: any;
  @Input() isArchive: boolean = false;
  @Input() isViewButton: boolean = false;
  @Input() isEditButton: boolean = false;
  @Input() isDeleteButton: boolean = false;

  @Input() isSearchfield: boolean = true;
  @Input() cellHeight: any
  @Input() columnSearch: any = '';
  @Input() isuserLogin: boolean = false;
  @Input() headerBackgroudColour: any = '#042e6f';
  // buttons functionality
  @Output() sortOrderChanged = new EventEmitter<any>();
  @Output() sortElementChanged = new EventEmitter<any>();
  @Output() closeButtonClicked = new EventEmitter<any>();

 
  // MatTable
  @ViewChild('dataTable', { static: true }) dataTable!: MatTable<Element>;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  get visibleColumnsIds() {
    const visibleColumnsIds = this.visibleColumns.map((columnsdef) => columnsdef.id);

    return visibleColumnsIds

  }
  constructor( private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.visibleColumns = this.columnsdef
   
  }
  viewfun(item: any) {
    this.viewButtonClicked.emit(item);
  }
  editfun(item: any) {
    this.editButtonClicked.emit(item);
  }
  Deletefun(item: any) {
    this.deleteButtonClicked.emit(item);
  }
  
  SearchHistoryFun(item: any) {
    this.SearchHistoryBtn.emit(item)
  }
  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.pageButtonClicked.emit(event.pageSize);
    this.currentPageButtonClicked.emit(event.pageIndex);
  }

  applyFilter(event: Event) {  
    const filterValue = (event.target as HTMLInputElement).value;
    this.columnSearch = filterValue.trim().toLowerCase();
    this.searchFieldChanged.emit(this.columnSearch)
  }
  clearField() {
    this.columnSearch = '';
    this.closeButtonClicked.emit(this.columnSearch);
  }
  formatMoneydisp(val: any): string {
    if (val !== '' && val !== null) {
      val = parseFloat(val.toString().replace(/,/g, '')).toFixed(2);
      val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return val;
    } else {
      return '';
    }
  }
  ngAfterContentInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.paginationChanged.emit(this.paginator)
    this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: string) => {
      const value: any = data[sortHeaderId];
      return typeof value === "string" ? value.toLowerCase() : value;
    };
    this.sort.sortChange.subscribe((res: any) => {
      this.sortOrderChanged.emit(res.direction);
      this.sortElementChanged.emit(res.active);

    })
    this._changeDetectorRef.detectChanges();
  }

}

