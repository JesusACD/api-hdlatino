const axios = require('axios');

const getDirectores = (credits) => {
	let directores = '';
	for (let i = 0; i < credits.crew.length; i++) {
		if (credits.crew[i].department == 'Directing') {
			directores += credits.crew[i].name + ', ';
		}
	}
	return directores;
};

const getSubtitulos = (subs) => {
	let subtitulos = '';
	if (subs.length > 0) {
		for (let i = 0; i < subs.length; i++) {
			if (i === 0) {
				subtitulos = subs[i];
			} else {
				subtitulos = subtitulos + ' - ' + subs[i];
			}
		}
	}
	return subtitulos;
};

const getCountry = (production_countries) => {
	return production_countries.map((country) => country.name).join(', ');
};

// const getGeneros = (generos) => {
// 	let generosSeparados = '';
// 	for (let i = 0; i < generos.length; i++) {
// 		generosSeparados += generos[i].name + ', ';
// 	}
// 	return generosSeparados.substring(0, generosSeparados.length - 2);
// };

const obtenerFavicon = (servidores) => {
	let favicon = '';
	for (let i = 0; i < servidores.length; i++) {
		switch (servidores[i]) {
			case 'google_drive':
				favicon +=
					'<img src="https://www.google.com/s2/favicons?domain=google.com/drive">';
				break;
			case 'mediafire':
				favicon +=
					'<img src="https://www.google.com/s2/favicons?domain=mediafire.com">';
				break;
			case '1fichier':
				favicon +=
					'<img src="https://www.google.com/s2/favicons?domain=1fichier.com">';
				break;
			case 'mega':
				favicon +=
					'<img src="https://www.google.com/s2/favicons?domain=mega.nz">';
				break;
			case 'uptobox':
				favicon +=
					'<img src="https://www.google.com/s2/favicons?domain=uptobox.com">';
				break;
			case 'terabox':
				favicon +=
					'<img src="https://www.google.com/s2/favicons?domain=http://terabox.com">';
				break;
			case 'sync':
				favicon +=
					'<img src="https://www.google.com/s2/favicons?domain=http://sync.com">';
				break;
			default:
				favicon = '';
				break;
		}
	}
	return favicon;
};

module.exports.generateTemplate = ({
	Calidad,
	Code,
	Extra,
	Formato,
	FormatoAudio,
	FormatoAudio2,
	Idioma,
	OtrosSubs,
	PesoArchivo,
	Resolucion,
	Subtitulos,
	aporteExclusivo,
	captura1,
	captura2,
	captura3,
	captura4,
	captura5,
	creditos,
	enlaceFree,
	enlaceVip,
	masInfo,
	misServidores,
	uploader,
	urlposter,
	urlpostergenerado,
	imdb_id,
	genres,
	original_title,
	overview,
	release_date,
	production_countries,
	credits,
	runtime,
	trailer,
	year,
	generos,
	temporada,
	capitulo,
	showMediaInfo
}) => {
	const resolucion = {
		i1080p: '1080p',
		i720p: '720p',
		i480p: '480p',
		ifull1080p: 'Full 1080p',
		i4K: '4K'
	};
	return `<div style="text-align: center;"><img src="${urlpostergenerado}" width="60%" /></div>

    ${
		overview !== 'Sin descripcion'
			? `<div class="sinopsis5">${overview}</div>`
			: ''
	}
	
    
    <div class="detalles5">
		Año: <b>${year}</b>
		Pais(es): <b>${getCountry(production_countries) || ''} </b>
		Director(es): <b> ${getDirectores(credits) || ''}</b>
		Duración: <b>${runtime}</b>
		Genero: <b>${generos || ''}</b>
		<a href="https://www.imdb.com/title/${
			imdb_id || ''
		}" target="_blank" rel="noopener"><img src="http://bit.ly/imdbicon" /></a>
		</div>
		
		<div class="capturas5">
		<img src="${captura1}" />
		<img src="${captura2 || ''}" />
		<img src="${captura3 || ''}" />
		<img src="${captura4 || ''}" />
		<img src="${captura5 || ''}" />
    </div>
    
	${
		trailer !== 'Sin trailer' || ''
			? `<div class="trailer5">
	${trailer}
	</div>`
			: ''
	}
    

	${masInfo ? `<div class="masinfo5"><b><br>${masInfo}</b></div>` : ''}
    
    <div class="descarga6">
		${
			showMediaInfo
				? `<div class="boton_show">
				MOSTRAR-MEDIA-INFO
			</div>
			<div class="boton_hide" style="display: none;">
				OCULTAR
			</div>
			<div class="caja">
				<div>${showMediaInfo}</div>
			</div>`
				: ''
		}
			<div>
				Audio: <b>${FormatoAudio.map((i) => i.value).join(', ')} ${
		FormatoAudio2 || ''
	}</b>
			Subtítulos: <b>${getSubtitulos(Subtitulos) || ''} ${OtrosSubs}</b>
			Calidad: <b>${Calidad}</b>
			Resolución: <b>${resolucion[Resolucion]}</b>
			Formato: <b>${Formato}</b>
			<div class="dataSerie">
				${temporada ? `Temporada: <b>${temporada}</b>` : ''}
				${capitulo ? `Capitulos: <b>${capitulo}</b>` : ''}
			</div>
			Tamaño: <b>${PesoArchivo}</b>
			Codec: <b>${Code}</b>
			Servidores: ${obtenerFavicon(misServidores) || ''}
			Subido por: <a href="https://vip.hdlatino.us/?s=${
				uploader || ''
			}" target="_blank" style="text-decoration:none" rel="noopener"><b style="color:red">${uploader}</b></a>
			
			<a class="link5free" style="color: #20b8f8;" href="${
				enlaceFree || ''
			}" target="_blank" rel="noopener">ENLACES PÚBLICOS</a>
			<a class="link5vip" style="color: #cba901;" href="${
				enlaceVip || ''
			}" target="_blank" rel="noopener">ENLACES VIP</a>
		</div>
    </div>
    
    <div class="final5">Si estas cansado de la publicidad y pasar por acortadores puedes unirte a miembros VIP Links Exclusivos y Activos.
    <a class="link5vip" style="color: #cba901;" href="https://vip.hdlatino.us/%e2%9a%9c-membresia-vip-%f0%9f%8f%86/">OBTENER AQUI</a></div>`;
};
