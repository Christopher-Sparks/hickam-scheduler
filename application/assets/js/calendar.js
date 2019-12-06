$(function () {
    $.ajax({
        type: 'GET',
        url: '/calendar/list',
        dataType: 'json',
        success: function (response) {
            response.forEach(function (calendar) {
                
                $('tbody').append(`
                <tr>
                    <td>${new Date(calendar.day).toLocaleString('en-US', {day: '2-digit', month: 'short', year: 'numeric', weekday: 'short'})}</td>
                    <td></td>
                    <td>$${calendar.express_am}.00</td>
                    <td>$${calendar.express_pm}.00</td>
                    <td>$${calendar.payout_am}.00</td>
                    <td>$${calendar.payout_pm}.00</td>
                </tr>
                `);
            });
        }
    });
});