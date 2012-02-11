//fragment program
// rasterisation (lissage) en passant du vertex au fragment (on passe d'un truc en 3D à du pixel)
// varying = vient du vertex

varying vec4 toto;
uniform float monRouge;

void main()
{
	vec4 macouleur = toto;
	macouleur.r = monRouge;
// on va chercher la composante rouge du vec 4 color (r g b a, position x y z, texture s t) on aurait pu mettre color.x ou color[0] on aurait eu la même valeur
// color est une variable déclarée
	gl_FragColor = macouleur;
}
