// fragments
uniform sampler2D Tex0;

void main() {
	vec4 color = texture2D(Tex0, gl_TexCoord[0].st);
	vec2 texPos = gl_TexCoord[0].st*10.0;
//	vec4 colorMosaic = texture2D(Tex0, texPos);
	vec2 decoupe = floor(texPos);
	color.rg = decoupe/10.0;
// 	color.b = 0.0;
	gl_FragColor = color;
}
// le floor découpe notre texture par 10 sur l'axe des x et y
// la découpe va de 0 à 9
// on la divise par 10
// on ne laisse passer que le bleu (ou enlever les commentaires)
// tant que la valeur de texture est inférieure à 1, valeur de texture floor = 0



















