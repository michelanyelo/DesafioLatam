jQuery.fn.parpadea = function () {
    // this apunta a jquery
    // each itera
    this.each(function () {
        // this apunta a cada elemento
        // param es el valor de la iteración
        elem = $(this);
        elem.fadeOut(250, function () {
            $(this).fadeIn(250);
        });
    });
    return this
};