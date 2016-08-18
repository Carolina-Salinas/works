<script>

   function checkScroll() {
      console.log($(document).scrollTop());

      if($(document).scrollTop() < 131)
      {
         $('menu').fadeIn();
      }
   }

   function initPage() {
      $(document).scroll(checkScroll);
   }


   $(document).ready(initPage);
</script>