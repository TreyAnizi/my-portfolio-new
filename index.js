document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const text = "jhgyjcghctxkuvx ygxgvtjbcyy ygync  ygynn gvn gv  tccn t gcvt cvt vfdsahyun gdbctfd cgtfhgdvtfybdshcfy gdhcthdcgthdyj dhcbgcdhydgyds hghubcyghgdhyyduh dgybhvchbychdg bsfbbyfncxmbhgfhd jgdygicmn gfygbd hgdbjbyifvd hgdnbtfxcjf hvu hghgv hgvfufm g mbuhtfng7gf ng7yfdjjfg7nfb7tfd uguig ";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById('typewriter').textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 10); // Adjust speed here
    }
}

typeWriter();