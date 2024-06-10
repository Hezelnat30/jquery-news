$(document).ready(function(){
    function loadNews () {
        let url= 'https://newsapi.org/v2/top-headlines';
        let country = 'id'
        let apiKey = 'dfbbbe5d3e05484a9a0e06a140b510ba'
    
        $.ajax({
            url: url,
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            },
            data:{
                'country':country
            },
            success: function(res){
                let articles = res.articles;
                for (var i = 0; i < articles.length; i++) {
                    let title = articles[i].title;
                    $('.card-container').append(`<div class="card">
                    <h2 class="title-article">${title}</h2>
                    <img src="img/placeholder-news.jpg">
                    <button>Baca Selengkapnya</button></div>`)
                }
                console.log(res)
            },
            error: function(error) {
                console.log('Berita tidak dapat ditemukan:', error)
            }
        })
    }

    loadNews();

    function showNotification() {
        $('.notification').css('display','flex')
        $('body').css('overflow','hidden')
    }
    function hideNotification() {
        $('.notification').css('display','none')
        $('body').css('overflow','')
    }

    $('.card-container').on('click','button', function(){
        showNotification();
    })

    $('#close-message').click(function(){
        hideNotification();
    })

    $('.card-container').on('mouseover', 'img', function(){
        $(this).css({
            'transform':'scale(1.05)',
            'transition':'all .2s ease-out'
        })
    })
    $('.card-container').on('mouseout', 'img' , function(){
        $(this).css('transform','scale(1)')
    })

    let user = prompt('Masukan Nama : ')
    if ( user === "" ){
        alert('Selamat Datang Guest!')
    } else if ( user === "Justin" ) {
        alert(`Selamat Datang Owner`)
    } else {
        alert(`Selamat Datang ${user}, kamu adalah pengguna baru!`)
    }
})