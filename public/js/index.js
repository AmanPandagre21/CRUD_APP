$("document").ready(function () {
  $("#add").submit(function (e) {
    alert("DATA INSERTED SUCCESSFULLY   ");
  });
});

$("document").ready(function () {
  $("#update_form").submit(function (e) {
    e.preventDefault();

    const id = $("#updateId").val();
    const array = $(this).serializeArray();
    const data = {};

    $.map(array, (val) => {
      data[val["name"]] = val["value"];
    });

    $.ajax({
      method: "PUT",
      url: "http://localhost:3000/api/users/" + id,
      data: data,
      success: function (response) {
        alert("USER DATA UPDATED SUCCESSFULLY");
      },
    });
  });
});

$("document").ready(function () {
  $(".table").on("click", "tbody tr td button.delete", function () {
    const id = $(this).attr("data");
    if (confirm("DO YPU REALLY WANT TO DELETE THIS USER")) {
      $.ajax({
        url: "http://localhost:3000/api/users/" + id,
        method: "DELETE",
        success: function (response) {
          alert("USER DELETED SUCCESFULLY");
          location.reload();
        },
      });
    }
  });
});
