document.addEventListener('DOMContentLoaded', () => {
    var hovertexts = document.querySelectorAll('[hovertext]');
    if(hovertexts.length > 0){
        document.body.insertAdjacentHTML('afterbegin', '<span style="display:none;"></span>');
        var hoverDiv = document.querySelector('span');
        hovertexts.forEach((hovertext)=>{
            var value = hovertext.getAttribute('hovertext');
            hovertext.addEventListener("mousemove", (e)=>{
                hoverDiv.innerHTML = value;
                hoverDiv.style.cssText = `display: block; position: fixed; font-weight: bold; font-size: 14px; font-family: courier; background-color: #fff; color: #404040; border: 1px solid #999; padding: 7px`;
                hoverDiv.style.top = e.clientY + 5 + 'px';
                hoverDiv.style.left = e.clientX + 5 + 'px';
            });
            hovertext.addEventListener("mouseout", (e)=>{
                hoverDiv.style.cssText = `display: none;`;
            });
        });
    }
});