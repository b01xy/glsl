//fragment program
// extension pour utiliser des textures rectangulaires, ne pas oublier d'envoyer [rectangle 1< à pix_texture

uniform sampler2D TTex0;
uniform float posCoord;

void main()
{
	vec2 coordTexB = gl_TexCoord[0].st;
	vec4 macolor = texture2D(TTex0,gl_TexCoord[0].st);
// on écrit la texture
	if (macolor.r > posCoord) {
		coordTexB += vec2(0.0,0.1);
	}
	vec4 colorFin = texture2D(TTex0,coordTexB);
	gl_FragColor = colorFin;
}
// le macolor permet de rendre les pixels dont la valeur de rouge est > posCoord transparents en ajoutant un alpha à la chaine
