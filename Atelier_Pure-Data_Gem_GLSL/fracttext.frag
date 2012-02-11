//fragment program
// s et t : coordonnées de texture, on pourrait aussi mettre x y ou r g b ...
// quand on utilise un sampler2DRect, ne pas oublier d'envoyer [rectangle 1< au [pix_tecture]
// #extension GL_ARB_texture_rectangle : enable
uniform sampler2D Tex0;

void main()
{
	vec4 colorB = texture2D(Tex0, gl_TexCoord[0].st);
	vec4 newPosTex = gl_TexCoord[0]*10.0;
	if (fract(newPosTex.s)>0.5) colorB = texture2D(Tex0, vec2(gl_TexCoord[0].s*(-1.0),gl_TexCoord[0].t));
	gl_FragColor = colorB;
}
// fract prend la fraction du nombre (ce qu'il y a après la virgule)
// >0.5 : c'est le cas pour 0.5, 1.5, 2.5 d'où les différentes bandes


// texture2D(Tex0, vec2(gl_TexCoord[0].s*(-1.0),gl_TexCoord[0].t))
// vec4(1.0,0.0,0.0,1.0);
