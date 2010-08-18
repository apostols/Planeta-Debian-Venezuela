<script type="text/javascript">

//<![CDATA[
	/* Oculta y muestra el div de contenido de un post */
	function ToggleContenido(postId)
	{
		if($("#" + postId + " > .contenido").attr("style").search("display: none") == -1)
		{
			$("#" + postId + " > .toggle > a").html("&#8659;Leer más");
			$("#" + postId + " > .descripcion").fadeTo("slow", 1);
		}
		else
		{
			$("#" + postId + " > .toggle > a").html("&#8657;Leer menos");
			$("#" + postId + " > .descripcion").fadeTo("slow", 0.33);
		}
		$("#" + postId + " > .contenido").slideToggle();
	}
//]]>

</script>
