function submit() {
    document.forms["form1"].submit();
    window.alert('hello');
}


var name = $('#name').text();
alert(name);   //creates popup

$('#click_me').click(function() {
    alert('Hello');
} );


function submitFn() {
    document.getElementById("result").innerHTML = document.getElementById('name').value ;

}