// filtrar mycalidad
module.exports.filtrar = (calidad_, idioma_, resolucion_, extra_) => {
	console.log('asi es como llegan', calidad_, idioma_, resolucion_);
	const mycalidad = {
		fps60: {
			latino: {
				i4k: {
					hdr: 'HD LATINO VIP 60FPS 4K HDR Latino.png',
					sdr: 'HD LATINO VIP 60FPS 4K SDR Latino.png',
					normal: 'HD LATINO VIP 60FPS 4K SDR Latino.png'
				},
				i1080p: {
					normal: 'LATINO_60FPS_1080P.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P 60FPS_lat.png'
				}
			},
			castellano: {
				i4k: {
					hdr: 'HD LATINO VIP 60FPS 4K HDR CAST.png',
					sdr: 'HD LATINO VIP 60FPS 4K SDR CAST.png',
					normal: 'HD LATINO VIP 60FPS 4K SDR CAST.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P 60FPS_cas.png'
				},
				i1080p: {
					normal: '60FPS 1080P_cas.png'
				}
			},
			subtitulado: {
				i4k: {
					hdr: 'HD LATINO VIP 60FPS 4K HDR SUB ING.png',
					sdr: 'HD LATINO VIP 60FPS 4K SDR SUB ING.png',
					normal: 'HD LATINO VIP 60FPS 4K SDR SUB ING.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P 60FPS_sub.png'
				},
				i1080p: {
					normal: '60FPS 1080P_sub.png'
				}
			},
			subtitulado_japones: {
				i4k: {
					hdr: 'HD LATINO VIP 60FPS 4K HDR SUB JAP.png',
					sdr: 'HD LATINO VIP 60FPS 4K SDR SUB JAP.png',
					normal: 'HD LATINO VIP 60FPS 4K SDR SUB JAP.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P 60FPS_jap.png'
				},
				i1080p: {
					normal: '60FPS 1080P_jap.png'
				}
			}
		},
		bd25: {
			latino: {
				i1080p: {
					normal: 'BD-25.png'
				}
			}
		},
		bd50: {
			latino: {
				i1080p: {
					normal: 'BD-50.png'
				}
			}
		},
		bdrip: {
			latino: {
				i4k: {
					dv: 'HD LATINO VIP BDRIp 4K DV Latino.png',
					hdr: 'HD LATINO VIP BDRIp 4K HDR Latino.png',
					hdr10: 'HD LATINO VIP BDRIp 4K HDR10 Latino.png',
					hdr10_dv: 'HD LATINO VIP BDRIp 4K HDR10_DV Latino.png',
					hdr10mas: 'HD LATINO VIP BDRIp 4K HDR10+ Latino.png',
					hdr10mas_dv: 'HD LATINO VIP BDRIp 4K HDR10+_DV Latino.png',
					sdr: 'HD LATINO VIP BDRIp 4K SDR Latino.png'
				},
				i1080p: {
					normal: 'BD-RIP.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P BD-RIP_lat.png'
				}
			},
			castellano: {
				i4k: {
					dv: 'HD LATINO VIP BDRIp 4K DV Cast.png',
					hdr: 'HD LATINO VIP BDRIp 4K HDR Cast.png',
					hdr10: 'HD LATINO VIP BDRIp 4K HDR10 Cast.png',
					hdr10_dv: 'HD LATINO VIP BDRIp 4K HDR10_DV Cast.png',
					hdr10mas: 'HD LATINO VIP BDRIp 4K HDR10+ Cast.png',
					hdr10mas_dv: 'HD LATINO VIP BDRIp 4K HDR10+_DV Cast.png',
					sdr: 'HD LATINO VIP BDRIp 4K SDR Cast.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P BD-RIP_cas.png'
				},
				i1080p: {
					normal: 'BD-RIP 1080P_cas.png'
				},
				i720p: {
					normal: 'BR-RIP 720P_cas.png'
				}
			},
			subtitulado: {
				i4k: {
					dv: 'HD LATINO VIP BDRIp 4K DV Sub ing.png',
					hdr: 'HD LATINO VIP BDRIp 4K HDR Sub ing.png',
					hdr10: 'HD LATINO VIP BDRIp 4K HDR10 Sub ing.png',
					hdr10_dv: 'HD LATINO VIP BDRIp 4K HDR10_DV Sub ing.png',
					hdr10mas: 'HD LATINO VIP BDRIp 4K HDR10+ Sub ing.png',
					hdr10mas_dv: 'HD LATINO VIP BDRIp 4K HDR10+_DV Sub ing.png',
					sdr: 'HD LATINO VIP BDRIp 4K SDR Sub ing.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P BD-RIP_sub.png'
				},
				i1080p: {
					normal: 'BD-RIP 1080P_sub.png'
				}
			},
			subtitulado_japones: {
				i4k: {
					dv: 'HD LATINO VIP BDRIp 4K DV SUB Jap.png',
					hdr: 'HD LATINO VIP BDRIp 4K HDR SUB Jap.png',
					hdr10: 'HD LATINO VIP BDRIp 4K HDR10 SUB Jap.png',
					hdr10_dv: 'HD LATINO VIP BDRIp 4K HDR10_DV SUB Jap.png',
					hdr10mas: 'HD LATINO VIP BDRIp 4K HDR10+ SUB Jap.png',
					hdr10mas_dv: 'HD LATINO VIP BDRIp 4K HDR10+_DV SUB Jap.png',
					sdr: 'HD LATINO VIP BDRIp 4K SDR SUB Jap.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P BD-RIP_jap.png'
				},
				i1080p: {
					normal: 'BD-RIP 1080P_jap.png'
				}
			}
		},
		bdxl: {
			latino: {
				i1080p: {
					normal: 'BD-XL.png'
				}
			}
		},
		brrip: {
			latino: {
				i4k: {
					hdr: 'HD LATINO VIP BRRIp 4K HDR Latino.png',
					sdr: 'HD LATINO VIP BRRIp 4K SDR Latino.png'
				},
				i1080p: {
					normal: 'LATINO_BR_RIP_1080P.png'
				},
				i720p: {
					normal: 'LATINO_BR_RIP_720P.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P BR-RIP_lat.png'
				}
			},
			castellano: {
				i4k: {
					hdr: 'HD LATINO VIP BRRIp 4K HDR Cast.png',
					sdr: 'HD LATINO VIP BRRIp 4K SDR Cast.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P BR-RIP_cas.png'
				},
				i1080p: {
					normal: 'BR-RIP 1080P.png'
				}
			},
			subtitulado: {
				i4k: {
					hdr: 'HD LATINO VIP BRRIp 4K HDR Sub ing.png',
					sdr: 'HD LATINO VIP BRRIp 4K SDR Sub ing.png'
				},
				i1080p: {
					normal: 'BR-RIP 1080P.png'
				},
				i720p: {
					normal: 'BR-RIP 720P.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P BR-RIP_sub.png'
				}
			},
			subtitulado_japones: {
				i4k: {
					hdr: 'HD LATINO VIP BRRIp 4K HDR Sub Jap.png',
					sdr: 'HD LATINO VIP BRRIp 4K SDR Sub Jap.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P BR-RIP_jap.png'
				},
				i1080p: {
					normal: 'BR-RIP 1080P_jap.png'
				},
				i720p: {
					normal: 'BR-RIP 720P_jap.png'
				}
			}
		},
		dvdrip: {
			latino: {
				i480p: {
					normal: 'DVD-RIP.png'
				}
			},
			castellano: {
				i480p: {
					normal: '480P Castellano.png'
				}
			},
			subtitulado: {
				i480p: {
					normal: '480P Ingles.png'
				}
			},
			subtitulado_japones: {
				i480p: {
					normal: '480P Japones.png'
				}
			}
		},
		hdrip: {
			latino: {
				i4k: {
					normal: 'LATINO_4K_HDR.png'
				},
				idolby: {
					normal: 'LATINO_4K_HDR_DOLBY.png'
				},
				i720p: {
					normal: 'HD-RIP 720P.png'
				},
				i1080p: {
					normal: 'HD-RIP 1080P.png'
				}
			},
			castellano: {
				i720p: {
					normal: 'HD-RIP 720P.png'
				}
			},
			subtitulado: {
				i720p: {
					normal: 'HD-RIP 720P.png'
				}
			},
			subtitulado_japones: {
				i720p: {
					normal: 'HD-RIP 720P JAPON.png'
				}
			}
		},
		hdtv: {
			latino: {
				i720p: {
					normal: 'HD-TV 720P.png'
				},
				i1080p: {
					normal: 'HD-TV 1080P.png'
				}
			},
			castellano: {
				i720p: {
					normal: 'HD-TV 720P.png'
				}
			},
			subtitulado: {
				i720p: {
					normal: 'HD-TV 720P.png'
				}
			},
			subtitulado_japones: {
				i720p: {
					normal: 'HD-TV 720P.png'
				}
			}
		},
		placebo: {
			latino: {
				i1080p: {
					normal: 'PLACEBO.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P PLACEBO_lat.png'
				}
			},
			castellano: {
				ifull1080p: {
					normal: 'FULL 1080P PLACEBO_cas.png'
				},
				i1080p: {
					normal: 'PLACEBO 1080P_cas.png'
				}
			},
			subtitulado: {
				ifull1080p: {
					normal: 'FULL 1080P PLACEBO_sub.png'
				},
				i1080p: {
					normal: 'PLACEBO 1080P_sub.png'
				}
			},
			subtitulado_japones: {
				ifull1080p: {
					normal: 'FULL 1080P PLACEBO_jap.png'
				},
				i1080p: {
					normal: 'PLACEBO 1080P_jap.png'
				}
			}
		},
		remux: {
			latino: {
				i4k: {
					dv: 'HD LATINO VIP REMUX 4K DV Latino.png',
					hdr: 'HD LATINO VIP REMUX 4K HDR Latino.png',
					hdr10: 'HD LATINO VIP REMUX 4K HDR10 Latino.png',
					hdr10_dv: 'HD LATINO VIP REMUX 4K HDR10 DV Latino.png',
					hdr10mas: 'HD LATINO VIP REMUX 4K HDR10+ Latino.png',
					hdr10mas_dv: 'HD LATINO VIP REMUX 4K HDR10+_DV Latino.png',
					sdr: 'HD LATINO VIP REMUX 4K SDR Latino.png',
					normal: 'HD LATINO VIP REMUX 4K SDR Latino.png'
				},
				i1080p: {
					normal: 'LATINO_REMUX_1080P.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P REMUX_lat.png'
				}
			},
			castellano: {
				i4k: {
					dv: 'HD LATINO VIP REMUX 4K DV CAST.png',
					hdr: 'HD LATINO VIP REMUX 4K HDR CAST.png',
					hdr10: 'HD LATINO VIP REMUX 4K HDR10 CAST.png',
					hdr10_dv: 'HD LATINO VIP REMUX 4K HDR10 DV CAST.png',
					hdr10mas: 'HD LATINO VIP REMUX 4K HDR10+ CAST.png',
					hdr10mas_dv: 'HD LATINO VIP REMUX 4K HDR10+_DV CAST.png',
					sdr: 'HD LATINO VIP REMUX 4K SDR CAST.png',
					normal: 'HD LATINO VIP REMUX 4K SDR CAST.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P REMUX_cas.png'
				}
			},
			subtitulado: {
				i4k: {
					dv: 'HD LATINO VIP REMUX 4K DV SUB ING.png',
					hdr: 'HD LATINO VIP REMUX 4K HDR SUB ING.png',
					hdr10: 'HD LATINO VIP REMUX 4K HDR10 SUB ING.png',
					hdr10_dv: 'HD LATINO VIP REMUX 4K HDR10 DV SUB ING.png',
					hdr10mas: 'HD LATINO VIP REMUX 4K HDR10+ SUB ING.png',
					hdr10mas_dv: 'HD LATINO VIP REMUX 4K HDR10+_DV SUB ING.png',
					sdr: 'HD LATINO VIP REMUX 4K SDR ING SUB.png',
					normal: 'HD LATINO VIP REMUX 4K SDR ING SUB.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P REMUX_sub.png'
				}
			},
			subtitulado_japones: {
				i4k: {
					dv: 'HD LATINO VIP REMUX 4K DV SUB JAP.png',
					hdr: 'HD LATINO VIP REMUX 4K HDR SUB JAP.png',
					hdr10: 'HD LATINO VIP REMUX 4K HDR10 SUB JAP.png',
					hdr10_dv: 'HD LATINO VIP REMUX 4K HDR10 DV SUB JAP.png',
					hdr10mas: 'HD LATINO VIP REMUX 4K HDR10+ SUB JAP.png',
					hdr10mas_dv: 'HD LATINO VIP REMUX 4K HDR10+_DV SUB JAP.png',
					sdr: 'HD LATINO VIP REMUX 4K SDR SUB JAP.png',
					normal: 'HD LATINO VIP REMUX 4K SDR SUB JAP.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P REMUX_jap.png'
				}
			}
		},
		webdl: {
			latino: {
				i4k: {
					dv: 'HD LATINO VIP WEB_DL 4K DV Latino.png',
					hdr: 'HD LATINO VIP WEB_DL 4K HDR Latino.png',
					hdr10: 'HD LATINO VIP WEB_DL 4K HDR Latino.png',
					hdr10_dv: 'HD LATINO VIP WEB_DL 4K HDR_DV Latino.png',
					hdr10mas: 'HD LATINO VIP WEB_DL 4K HDR10+ Latino.png',
					hdr10mas_dv: 'HD LATINO VIP WEB_DL 4K HDR10+_DV Latino.png',
					sdr: 'HD LATINO VIP WEB_DL 4K SDR Latino.png',
					normal: 'LATINO_4K_WEB_DL.png'
				},
				idolby: {
					normal: 'LATINO_4K_WEB_DL_DOLBY.png'
				},
				i720p: {
					normal: 'LATINO_WEB_DL_720P.png',
					wwe: 'WWE_720P.png'
				},
				i1080p: {
					hdr: 'LATINO_WEB_DL_1080P_HDR.png',
					wwe: 'WWE_1080P.png',
					normal: 'LATINO_WEB_DL_1080P.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P WEB-DL_lat.png'
				}
			},
			castellano: {
				i4k: {
					dv: 'HD LATINO VIP WEB_DL 4K DV CAST.png',
					hdr10: 'HD LATINO VIP WEB_DL 4K HDR CAST.png',
					hdr10_dv: 'HD LATINO VIP WEB_DL 4K HDR_DV CAST.png',
					hdr10mas: 'HD LATINO VIP WEB_DL 4K HDR10+ CAST.png',
					hdr10mas_dv: 'HD LATINO VIP WEB_DL 4K HDR10+_DV CAST.png',
					sdr: 'HD LATINO VIP WEB_DL 4K SDR CAST.png',
					normal: 'LATINO_4K_WEB_DL.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P WEB-DL_cas.png'
				},
				i1080p: {
					normal: 'WEB-DL 1080P_cas.png'
				},
				i720p: {
					normal: 'WEB-DL 720P_cas.png'
				}
			},
			subtitulado: {
				i4k: {
					dv: 'HD LATINO VIP WEB_DL 4K DV  Sub ING.png',
					hdr10: 'HD LATINO VIP WEB_DL 4K HDR Sub ING.png',
					hdr10_dv: 'HD LATINO VIP WEB_DL 4K HDR_DV Sub ING.png',
					hdr10mas: 'HD LATINO VIP WEB_DL 4K HDR10+ Sub ING.png',
					hdr10mas_dv:
						'HD LATINO VIP WEB_DL 4K HDR10+_DV Sub ING.png',
					sdr: 'HD LATINO VIP WEB_DL 4K SDR Sub ING.png',
					normal: 'LATINO_4K_WEB_DL.png'
				},
				i1080p: {
					normal: 'WEB-DL 1080P_sub.png'
				},
				i720p: {
					normal: 'WEB-DL 720P_sub.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P WEB-DL_sub.png'
				}
			},
			subtitulado_japones: {
				i4k: {
					dv: 'HD LATINO VIP WEB_DL 4K DV Sub JAP.png',
					hdr10: 'HD LATINO VIP WEB_DL 4K HDR Sub JAP.png',
					hdr10_dv: 'HD LATINO VIP WEB_DL 4K HDR_DV Sub JAP.png',
					hdr10mas: 'HD LATINO VIP WEB_DL 4K HDR10+ Sub JAP',
					hdr10mas_dv:
						'HD LATINO VIP WEB_DL 4K HDR10+_DV Sub JAP.png',
					sdr: 'HD LATINO VIP WEB_DL 4K SDR Sub JAP.png',
					normal: 'LATINO_4K_WEB_DL.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P WEB-DL_jap.png'
				},
				i1080p: {
					normal: 'WEB-DL 1080P_jap.png'
				},
				i720p: {
					normal: 'WEB-DL 720P_jap.png'
				}
			}
		},
		webrip: {
			latino: {
				i4k: {
					hdr: 'HD LATINO VIP WEB-RIP 4K HDR Latino.png',
					hdr10_dv: 'HD LATINO VIP WEB-RIP 4K HDR_DV Latino.png',
					sdr: 'HD LATINO VIP WEB-RIP 4K SDR Latino.png',
					normal: 'HD LATINO VIP WEB-RIP 4K SDR Latino.png'
				},
				i720p: {
					normal: 'WEB-RIP 720P.png'
				},
				i1080p: {
					normal: 'WEB-RIP 1080P.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P WEB-RIP_lat.png'
				}
			},
			castellano: {
				i4k: {
					hdr: 'HD LATINO VIP WEB-RIP 4K HDR CAST.png',
					hdr10_dv: 'HD LATINO VIP WEB-RIP 4K HDR_DV CAST.png',
					sdr: 'HD LATINO VIP WEB-RIP 4K SDR CAST.png',
					normal: 'HD LATINO VIP WEB-RIP 4K SDR CAST.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P WEB-RIP_cas.png'
				},
				i1080p: {
					normal: 'WEB-RIP 1080P_cas.png'
				},
				i720p: {
					normal: 'WEB-RIP 720P_cas.png'
				}
			},
			subtitulado: {
				i4k: {
					hdr: 'HD LATINO VIP WEB-RIP 4K HDR SUB ING.png',
					hdr10_dv: 'HD LATINO VIP WEB-RIP 4K HDR_DV SUB ING.png',
					sdr: 'HD LATINO VIP WEB-RIP 4K SDR SUB ING.png',
					normal: 'HD LATINO VIP WEB-RIP 4K SDR SUB ING.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P WEB-RIP_sub.png'
				},
				i1080p: {
					normal: 'WEB-RIP 1080P_sub.png'
				},
				i720p: {
					normal: 'WEB-RIP 720P_sub.png'
				}
			},
			subtitulado_japones: {
				i4k: {
					hdr: 'HD LATINO VIP WEB-RIP 4K HDR SUB JAP.png',
					hdr10_dv: 'HD LATINO VIP WEB-RIP 4K HDR_DV SUB JAP.png',
					sdr: 'HD LATINO VIP WEB-RIP 4K SDR SUB JAP.png',
					normal: 'HD LATINO VIP WEB-RIP 4K SDR SUB JAP.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P WEB-RIP_jap.png'
				},
				i1080p: {
					normal: 'WEB-RIP 1080P_jap.png'
				},
				i720p: {
					normal: 'WEB-RIP 720P_jap.png'
				}
			}
		},
		x265: {
			latino: {
				i4k: {
					hdr: 'HD LATINO VIP X265 4K HDR Latino.png',
					sdr: 'HD LATINO VIP X265 4K SDR Latino.png',
					normal: 'HD LATINO VIP X265 4K SDR Latino.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P X265_lat.png'
				}
			},
			castellano: {
				i4k: {
					hdr: 'HD LATINO VIP X265 4K HDR CAST.png',
					sdr: 'HD LATINO VIP X265 4K SDR CAST.png',
					normal: 'HD LATINO VIP X265 4K SDR CAST.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P X265_cas.png'
				},
				i1080p: {
					normal: 'X265 1080P_cas.png'
				}
			},
			subtitulado: {
				i4k: {
					hdr: 'HD LATINO VIP X265 4K HDR SUB ING.png',
					sdr: 'HD LATINO VIP X265 4K SDR SUB ING.png',
					normal: 'HD LATINO VIP X265 4K SDR SUB ING.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P X265_sub.png'
				},
				i1080p: {
					normal: 'X265 1080P_sub.png'
				}
			},
			subtitulado_japones: {
				i4k: {
					hdr: 'HD LATINO VIP X265 4K HDR SUB JAP.png',
					sdr: 'HD LATINO VIP X265 4K SDR SUB JAP.png',
					normal: 'HD LATINO VIP X265 4K SDR SUB JAP.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P X265_jap.png'
				},
				i1080p: {
					normal: 'X265 1080P_jap.png'
				}
			}
		},
		series: {
			latino: {
				i4k: {
					dv: 'HD LATINO VIP Series 4K DV Latino.png',
					hdr: 'HD LATINO VIP Series 4K HDR Latino.png',
					hdr10_dv: 'HD LATINO VIP Series 4K HDR_DV Latino.png',
					sdr: 'HD LATINO VIP Series 4K SDR Latino.png',
					normal: 'SERIES_4K.png'
				},
				i1080p: {
					normal: 'SERIES_1080P.png'
				},
				i720p: {
					normal: 'SERIES_720P.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P SERIES_lat.png'
				}
			},
			castellano: {
				i4k: {
					dv: 'HD LATINO VIP Series 4K DV HDR CAST.png',
					hdr: 'HD LATINO VIP Series 4K HDR CAST.png',
					hdr10_dv: 'HD LATINO VIP Series 4K_DV HDR CAST.png',
					sdr: 'HD LATINO VIP Series 4K SDR CAST.png',
					normal: 'SERIES_4K.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P SERIES_cas.png'
				},
				i1080p: {
					normal: 'SERIES 1080P_cas.png'
				},
				i720p: {
					normal: 'SERIES 720P_cas.png'
				}
			},
			subtitulado: {
				i4k: {
					dv: 'HD LATINO VIP Series 4K DV SUB ING.png',
					hdr: 'HD LATINO VIP Series 4K HDR SUB ING.png',
					hdr10_dv: 'HD LATINO VIP Series 4K HDR_DV SUB ING.png',
					sdr: 'HD LATINO VIP Series 4K SDR SUB ING.png',
					normal: 'SERIES_4K.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P SERIES_sub.png'
				},
				i1080p: {
					normal: 'SERIES 1080P_sub.png'
				},
				i720p: {
					normal: 'SERIES 720P_sub.png'
				}
			},
			subtitulado_japones: {
				i4k: {
					dv: 'HD LATINO VIP Series 4K DV SUB JAP.png',
					hdr: 'HD LATINO VIP Series 4K HDR SUB JAP.png',
					hdr10_dv: 'HD LATINO VIP Series 4K HDR_DV SUB JAP.png',
					sdr: 'HD LATINO VIP Series 4K SDR SUB JAP.png',
					normal: 'SERIES_4K.png'
				},
				ifull1080p: {
					normal: 'FULL 1080P SERIES_jap.png'
				},
				i1080p: {
					normal: 'SERIES 1080P_jap.png'
				},
				i720p: {
					normal: 'SERIES 720P_jap.png'
				}
			}
		}
	};
	let res;
	let filtro1080;
	let calidad = calidad_.toLowerCase();
	let idioma = idioma_.toLowerCase();
	let resolucion = resolucion_.toLowerCase();
	let extra = extra_.toLowerCase();

	if (resolucion.charAt(0) !== 'i') {
		res = `i${resolucion}`;
	} else {
		res = resolucion;
	}

	if (calidad === '60fps') {
		calidad = 'fps60';
	}
	if (extra === 'ninguno') {
		extra = 'normal';
	}

	let filtro = mycalidad[calidad];
	if (filtro) {
		if (!filtro.hasOwnProperty(idioma)) return 'sub.png';
		filtro = filtro[idioma];
		if (filtro) {
			if (!filtro.hasOwnProperty(res)) return 'sub.png';
			filtro1080 = filtro[res];
			if (filtro1080) {
				if (!filtro1080.hasOwnProperty(extra)) return 'sub.png';
				filtro = filtro1080[extra];
				if (filtro) {
					return filtro;
				} else {
					return filtro1080;
				}
			}
		}
	}
	return 'sub.png';
};

// console.log(filtrar('fps60', 'latino', 'i1080p'));

// convertir string a minuscula
module.exports.toLowerCase = (str) => {
	return str.toLowerCase();
};

module.exports.numRamdon = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

// comnprobar si una key existe en un objeto
module.exports.hasKey = (obj, key) => {
	return obj.hasOwnProperty(key);
};
