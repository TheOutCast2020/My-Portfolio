function goToP(paragraphId) {
    var paragraph = document.getElementById(paragraphId);
    
    if (paragraph) {
        paragraph.scrollIntoView({behavior: 'smooth'});
    }
}