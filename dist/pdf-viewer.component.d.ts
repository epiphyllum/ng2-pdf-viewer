import { ElementRef, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import 'pdfjs-dist/build/pdf.combined';
import 'pdfjs-dist/web/pdf_viewer';
export declare class PdfViewerComponent implements OnChanges, OnInit {
    private element;
    private static CSS_UNITS;
    private _showAll;
    private _renderText;
    private _renderLink;
    private _stickToPage;
    private _originalSize;
    private _pdf;
    private _page;
    private _zoom;
    private _rotation;
    private _enhanceTextSelection;
    private _pageBorder;
    private _externalLinkTarget;
    private _pdfViewer;
    private _pdfLinkService;
    afterLoadComplete: EventEmitter<PDFDocumentProxy>;
    constructor(element: ElementRef);
    ngOnInit(): void;
    src: string | Uint8Array | PDFSource;
    page: any;
    pageChange: EventEmitter<number>;
    renderText: boolean;
    renderLink: any;
    originalSize: boolean;
    showAll: boolean;
    stickToPage: boolean;
    zoom: number;
    rotation: number;
    externalLinkTarget: string;
    pageBorder: boolean;
    enhanceTextSelection: boolean;
    setupViewer(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private loadPDF();
    private update();
    render(): void;
    updateSize(): void;
    isValidPageNumber(page: number): boolean;
}
