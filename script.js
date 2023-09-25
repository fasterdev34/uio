var app = "vnd.youtube://youtube.com/redirect?event=comments&redir_token=QUFFLUhqblRqV1otTDhEeldmSkRSN1pkZUs4UnNwUFZDd3xBQ3Jtc0tuSHVUWGZrcVl4M0hjaFd6SEhwVm43NnVENWY3Ymdfam5TUHI3TUhDT2tPTThWMkg5aS1rTXJrc2hpNy1XMWtxNWtRN0tvenRwNHpicHNnN3NxemhyTmg5THYtOHNMZ3NBLWtCTk5ueVo2QlVKUGR4NA&q=https%3A%2F%2Fenemov.spiendiddate.net%2F%3Futm_source%3Dda57dc555e50572d%26s1%3D165078%26s2%3D1928177%26s3%3DGG%26j1%3D1&html_redirect=1";

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {

    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = app;
      window.setTimeout(function() {
        window.location.href = mobileFallback;
      }, 25);
    } else {
      window.location.href = desktopFallback;
    }

    function killPopup() {
      window.removeEventListener('pagehide', killPopup);
    }

    window.addEventListener('pagehide', killPopup);
  }, 10);
});

document.getElementById("button").addEventListener("click", function() {
  // Add your desired action here
  alert("Button clicked!");
});
