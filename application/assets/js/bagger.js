$(function () {
    //$('#example').DataTable();

    $.ajax({
        type: 'GET',
        url: '/bagger/list',
        dataType: 'json',
        success: function (response) {
            response.forEach(function (bagger) {
                var scheduleString = '';
                for (var i = 0; i < bagger.schedule.length; i++) {
                    if (i == bagger.schedule.length - 1) {
                        scheduleString = scheduleString + `${bagger.schedule[i].day}(${bagger.schedule[i].period})`;
                    }
                    else {
                        scheduleString = scheduleString + `${bagger.schedule[i].day}(${bagger.schedule[i].period}) - `;
                    }

                }
                $('tbody').append(`
                <tr>
                    <td>${bagger.number}</td>
                    <td>${bagger.name}</td>
                    <td>${scheduleString}</td>
                    <td>${bagger.address}</td>
                    <td>${bagger.phone}</td>
                    <td>${bagger.roles}</td>
                    <td><input class="btn btn-primary btn-block" input type="button" value="Edit"></td>
                </tr>
                `);
            });
        }
    });

    $('#bagger-create').submit(function (event) {
        event.preventDefault();
        var data = $('#bagger-create').serializeArray();
        $.ajax({
            type: 'POST',
            url: '/bagger/create',
            data: data,
            dataType: 'text',
            success: function (response) {
                if (response == 'true') {
                    window.location = '/bagger';
                }
            }
        });
    });

});