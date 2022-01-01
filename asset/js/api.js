const API_KEY = 'api_key=b0c0d6c7530234d1ffb25e76f4ee8b84';

function obtenerPeliculas(nameMovie) {
    // Consumimos la API
    $.ajax({
        type: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?${API_KEY}&query=${nameMovie}`,
        dataType: "json",
        async: true,
        success: function (data) {
            Mostrar(data)
        } // En caso de consulta exitosa se ejecuta esto
    });
}

function Mostrar(data) {
    //alert(data.results[0].overview)
    $("#contenedorimg").empty();
    $("#conetenedorDatosPelicula").empty();
    $("#contenedorPelicula").empty();
    $("#contenedorimg").append(`<img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${data.results[0].poster_path}" alt="">`);
    $("#conetenedorDatosPelicula").append(`<h2>${data.results[0].original_title}</h2>`);
    $("#conetenedorDatosPelicula").append(`<p>${data.results[0].overview}</p>`);
    $("#conetenedorDatosPelicula").append(`<p>Popularidad: ${data.results[0].popularity}</p>`);
    $("#conetenedorDatosPelicula").append(`<p>Fecha de lanzamiento: ${data.results[0].release_date}</p>`);
    $("#conetenedorDatosPelicula").append(`<p>Promedio de puntuación: ${data.results[0].vote_average}</p>`);
    $("#conetenedorDatosPelicula").append(`<p>Para adultos: ${data.results[0].adult}</p>`);
    $("#conetenedorDatosPelicula").append(`<p>Idioma original: ${data.results[0].original_language}</p>`);
      
}

function pasarPelicula(name) {
    sessionStorage.setItem('movie', name);
    location.href = 'plantilla_película.html'; 
}

function seleccionarVideoPelicula(name) {
    let iframe;
    if (name == "The Marksman") {
        iframe = `<iframe width="727" height="409" src="https://www.youtube.com/embed/RBdSHZy8UrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
    if (name == "Falcon Rising") {
        iframe = `<iframe width="727" height="409" src="https://www.youtube.com/embed/7AP32vS4zJ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>`;
    }

    if (name == "Infierno blanco") {
        iframe = ` <iframe width="727" height="409" src="https://www.youtube.com/embed/K6aBSOpAOKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }

    if (name == "Avatar") {
        iframe =` <iframe width="729" height="409" src="https://www.youtube.com/embed/aSVbSM6FXkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }




    if (name == "No se aceptan devoluciones") {
        iframe = `<iframe width="727" height="409" src="https://www.youtube.com/embed/06rDM-nj2cQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
    if (name == "Jefa por accidente") {
        iframe =` <iframe width="907" height="380" src="https://www.youtube.com/embed/1r3KHK1SvKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
    if (name == "Aventuras en la escuela publica") {
        iframe = ` <iframe width="757" height="409" src="https://www.youtube.com/embed/ebOB2PblohI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
    if (name == "Por fin solo en casa") {
        iframe = `<iframe width="727" height="409" src="https://www.youtube.com/embed/qwizPQ4OnYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }




    if (name == "Voces") {
        iframe =`<iframe width="727" height="409" src="https://www.youtube.com/embed/LY6ixMGaOM0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
    if (name == "Annabelle") {
        iframe = `<iframe width="800" height="409" src="https://www.youtube.com/embed/yvjKqSwkT6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
    if (name == "El orfanato") {
        iframe = `<iframe width="727" height="409" src="https://www.youtube.com/embed/TS6qYCQA-2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
    if (name == "Ouija: El origen del mal") {
        iframe = `<iframe width="727" height="409" src="https://www.youtube.com/embed/VEmAJVnaJ_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }




    if (name == "Coco ") {
        iframe = `<iframe width="727" height="409" src="https://www.youtube.com/embed/8jgUmeMI_Uo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }

    if (name == "Spirit: Stallion of the Cimarron ") {
        iframe = ` <iframe width="876" height="389" src="https://www.youtube.com/embed/jcPjseBuXoQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }

    if (name == "Buscando a Dory") {
        iframe = ` <iframe width="727" height="409" src="https://www.youtube.com/embed/V6pvTLHCzdg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }

    if (name == "Ice age") {
        iframe = `<iframe width="727" height="409" src="https://www.youtube.com/embed/K5lK0TUjAE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }




    if (name == "una voz silenciosa") {
        iframe = `<iframe width="758" height="409" src="https://www.youtube.com/embed/8sGUDYu8NNs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }

    
    if (name == "劇場版「進撃の巨人」前編〜紅蓮の弓矢〜") {
        iframe = `<iframe src="https://mega.nz/embed/qUBXGYob#3I4TF-cfUYprOpaQ7v3LbAN4ufEjoi6eQPykedu6EzM" width="640" height="360" frameborder="0" allowfullscreen></iframe>`;
    }

    if (name == "Tokyo Ghoul") {
        iframe = `<iframe width="511" height="409" src="https://www.youtube.com/embed/Oe8H_koWE_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }

    if (name == "劇場版「鬼滅の刃」無限列車編") {
        iframe = `<iframe src="https://mega.nz/embed/bw4QWLqQ#xfjW9YEyF6y5fH4MsVqtLeLmUtD-KJ5IfOOeJ80Z1u8" width="640" height="360" frameborder="0" allowfullscreen></iframe>`;
    }


    return iframe;
}

$(document).ready(function () {
    var pelicula = sessionStorage.getItem('movie');
    var iframe = seleccionarVideoPelicula(pelicula);
    obtenerPeliculas(pelicula);
    $("#contenedorTrailer").empty(); 
    $("#contenedorTrailer").append(iframe); 

});