function answer(answer) {
    var value = answer.getAttribute("data-value");
    if (value == "2") {
        Swal.fire({
            icon: 'success',
            title: 'Jawaban anda benar',
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Jawaban anda salah',
            showConfirmButton: false,
            timer: 1500
        });
    }
}