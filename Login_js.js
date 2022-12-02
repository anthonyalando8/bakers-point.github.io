<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="favicon.ico">
<link rel="stylesheet" href="Login_css.css">
<link rel="stylesheet" href="page_layout_default.css">
<script src="Login_js.js"></script>
<script src="https://www.googleoptimize.com/optimize.js?id=OPT-WQWZ5ZM"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://kit.fontawesome.com/3695de9773.js" crossorigin="anonymous"></script>
</head>
<body>
<div class="navbar">
    <a href="index.html"><i class="fa fa-fw fa-home"></i> Home</a>
    <a href="Menu.html"><i class="fa-solid fa-cake-candles"></i> Products</a>
    <a href="orders.html"><i class="fa-solid fa-truck-fast"></i>Orders</a>
    <a href="Reservations.html"><i class="fa-solid fa-table"></i> Reservation</a>
    <a href="shops.html"><i class="fa-solid fa-shop"></i> Shops</a>
    <a href="about.html"><i class="fa-solid fa-address-card"></i> About Us</a>
    <a href="Gallery.html"><i class="fa-solid fa-image"></i> Gallery</a>
    <a href="account.html"><i class="fa-solid fa-circle-info"></i> Account</a>
    <a class="active"href="login.html"><i class="fa fa-fw fa-user"></i> Login</a>
    <a href=""><i class="fa fa-fw fa-search"></i> Search</a>
</div>
  <h2>Modal Login Form</h2>

  <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>
  
  <div id="id01" class="modal">
    
    <form class="modal-content animate" action="/action_page.php" method="post">
      <div class="imgcontainer">
        <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
        <img src="https://ik.imagekit.io/anthonyalando/Images/user.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669121593852" alt="Avatar" class="avatar">
      </div>
  
      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required>
  
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>
          
        <button type="submit">Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
      </div>
  
      <div class="container" style="background-color:#f1f1f1">
        <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
        <span class="psw">Forgot <a href="#">password?</a></span>
      </div>
    </form>
  </div>
  
  <script>
  // Get the modal
  var modal = document.getElementById('id01');
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  </script>

</body>
</html>
