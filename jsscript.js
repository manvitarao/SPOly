function pdf() {
    const element = document.getElementById("invoice");
    
    
    html2pdf()
    .from(element)
    .save('PDF-Downloader.pdf');
}