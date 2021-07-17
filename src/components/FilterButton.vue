<template>
<div class="dropdown">
  <button @click="dropdownClick" class="dropbtn">Dropdown <i class="fa fa-caret-down" aria-hidden="true"></i></button>
  <div id="my_dropdown" class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>

</template>

<script>
export default {
    name: "FilterButton",
    methods: {
        dropdownClick: function() {
            document.getElementById("my_dropdown").classList.toggle("show");
        }
    }
}
</script>


<style scoped>

.dropbtn {
  background-color: #E8E5DE;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin-left: 16px;
  font-size: 16px;
  cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: #D5D6D1;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd}

.show {display:block;}
</style>