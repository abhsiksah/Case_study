window.onload = function(){


    document.getElementById("download").addEventListener("click",()=>{
        const pdffile = this.document.getElementById("pdffile");
        // console.log(pdffile)
        // console.log(window)
        html2pdf().from(pdffile).save();
    })
}

