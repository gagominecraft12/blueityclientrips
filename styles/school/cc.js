var TemplateCC;TemplateCC=(TemplateCC||function(){var e=null;var d="*";var c=function(){};var b="cc2";var a={GA_TAGS:["guy","girl","xmas","thanksgiving","scary","scifi","police","history","simple","family","office","streetz","famous","chibi","ninja"],setTagFilter:function(f){e=((typeof f=="object"&&f instanceof Array&&f)||null);return a},setCategory:function(f){d=((typeof f=="string"&&f)||d);return a},setThemeId:function(f){b=((typeof f=="string"&&f)||b);return a},onSuccess:function(f){c=((typeof f=="function"&&f)||c);return a},query:function(){jQuery.ajax({type:"POST",url:"/ajax/getCCPreMadeCharacters",data:{theme_code:b,cat:d},dataType:"json",success:function(f){f=jQuery.grep(f,function(j){var h=false;for(var g=0;g<e.length;g++){if(jQuery.inArray("_category_"+e[g],j.tags)>=0){return true}}return false});c(f)}});return a}};return a});