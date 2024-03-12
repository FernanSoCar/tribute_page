window.addEventListener('scroll', function() {
    var btnTopo = document.getElementById('btnTopo');
    if (window.scrollY > 300) { 
      btnTopo.style.display = 'block';
    } else {
      btnTopo.style.display = 'none'; pixels
    }
  });
  
  document.getElementById('btnTopo').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  });