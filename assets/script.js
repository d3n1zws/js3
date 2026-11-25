$(document).ready(function()
{
    $.ajax({
        url : 'https://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2',
        type : 'GET',
        success : function(datas)
        {
            datas.users.forEach(data => {
                {
                    let card = 
                    `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${data.fisrtName} ${data.lastName}</h5>
                            <p class="card-text">${data.email}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>`
                    $('.rows').append(card);
                }
            });
        },
        error : function(error)
        {
            console.log(error);
        }
    });
});