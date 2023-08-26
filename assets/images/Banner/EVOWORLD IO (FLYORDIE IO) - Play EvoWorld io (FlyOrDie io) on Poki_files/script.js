function translatePage()
{
    $("[data-translate]").each( function(){
        translate(this);
    });

    if (typeof afterTranslatePage=="function")
    afterTranslatePage(lang);
}

function translate(obj)
{
    var vars=[];
    if (typeof  $(obj).data("translate-vars") !== 'undefined')
        vars = $(obj).data("translate-vars");
    
    var text=getTranslation($(obj).data("translate"),vars);

    if ($(obj).data("translate-uppercase")==true)
    text = text.toUpperCase();

    if ($(obj).data("translate-ucfirst")==true)
    text = text.charAt(0).toUpperCase() + text.slice(1);
    
    if ($(obj).data("translate-placeholder")==true)
        $(obj).attr("placeholder", text);
    else
        $(obj).html(text);
}

function getTranslation(word,vars)
{
    var ret=lang[word];
    if (typeof ret==='undefined') return word;
    
    if (typeof vars != 'undefined')
	{
		if (typeof vars != "object") vars = [vars];
        for (var i=0;i<vars.length;i++)
            ret=ret.replace("VAR"+(i+1),vars[i]);
	}
    return ret;
}

function changeLanguage(lang)
{
	$.ajax({
        async:false,
        url: siteUrl+"lang/getDictionary.php?lang="+lang,
        dataType: "script",
		success: function(){
			translatePage();
		}
    });
	
	
}