//fragment program
// déplacer la texture d'une image en fonction d'une autre image
// gl_TexCoord[0] coordonnées de la texture du meshware
uniform sampler2D Tex0;
uniform sampler2D Tex1;
uniform float xdeform;

void main()
{
	vec4 colorDDD = texture2D(Tex1, gl_TexCoord[0].st);
	vec2 deplacement = vec2((colorDDD.r-0.5)*xdeform, (colorDDD.g-0.5)*xdeform);
	vec4 colorB = texture2D(Tex0, gl_TexCoord[0].st+deplacement);
	gl_FragColor = colorB;
}
