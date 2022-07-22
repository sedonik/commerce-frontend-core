"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[2267],{4514:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return m},default:function(){return c}});var n,o=t(87462),i=t(63366),l=(t(15007),t(64983)),d=t(91515),r=["components"],m={},s=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),p={_frontmatter:m},u=d.Z;function c(e){var a=e.components,t=(0,i.Z)(e,r);return(0,l.mdx)(u,(0,o.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"layouts"},"Layouts"),(0,l.mdx)("p",null,"This article describes the basic concepts you need to know to create layouts for your custom ",(0,l.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/theme"},"theme"),"."),(0,l.mdx)("p",null,"The basic components of page design are layouts, containers, and blocks. A ",(0,l.mdx)("em",{parentName:"p"},"layout")," represents the structure of a web page (1). ",(0,l.mdx)("em",{parentName:"p"},"Containers")," represent the placeholders within that web page structure (2). And ",(0,l.mdx)("em",{parentName:"p"},"blocks")," represent the UI controls or components within the container placeholders (3). These terms are illustrated and defined below."),(0,l.mdx)("p",null,"The objective is to create a structured, common set of layout instructions to render pages. Most pages on a website can be categorized as a 1 column, 2 column, or 3 column layout. These page layouts can be applied to a page from within the admin panel."),(0,l.mdx)("p",null,(0,l.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"950px"}},"\n      ",(0,l.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,l.mdx)("picture",{parentName:"span"},"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/a30a35224e7d9f1df7f8a5d18330dbe2/cb523/layouts_block_containers_defn21.webp 320w","/commerce-frontend-core/static/a30a35224e7d9f1df7f8a5d18330dbe2/797b9/layouts_block_containers_defn21.webp 640w","/commerce-frontend-core/static/a30a35224e7d9f1df7f8a5d18330dbe2/6f970/layouts_block_containers_defn21.webp 950w"],sizes:"(max-width: 950px) 100vw, 950px",type:"image/webp"}),"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/a30a35224e7d9f1df7f8a5d18330dbe2/72799/layouts_block_containers_defn21.png 320w","/commerce-frontend-core/static/a30a35224e7d9f1df7f8a5d18330dbe2/6af66/layouts_block_containers_defn21.png 640w","/commerce-frontend-core/static/a30a35224e7d9f1df7f8a5d18330dbe2/906b5/layouts_block_containers_defn21.png 950w"],sizes:"(max-width: 950px) 100vw, 950px",type:"image/png"}),"\n          ",(0,l.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/a30a35224e7d9f1df7f8a5d18330dbe2/906b5/layouts_block_containers_defn21.png",alt:"web page sample layout",title:"web page sample layout",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,l.mdx)("p",null,"(1) ",(0,l.mdx)("em",{parentName:"p"},"Layouts")," provide the structures for web pages using an XML file that identifies all the containers and blocks composing the page. The details of layout XML files are described later in this section."),(0,l.mdx)("p",null,"(2) ",(0,l.mdx)("em",{parentName:"p"},"Containers")," assign content structure to a page using container tags within a layout XML file. A container has no additional content except the content of included elements. Examples of containers include the header, left column, main column, and footer."),(0,l.mdx)("p",null,"(3) ",(0,l.mdx)("em",{parentName:"p"},"Blocks")," render the UI elements on a page using block tags within a layout XML file. Blocks use templates to generate the ",(0,l.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/html"},"HTML")," to insert into its parent structural block. Examples of blocks include a ",(0,l.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/category"},"category")," list, a mini cart, product tags, and product listing."),(0,l.mdx)("h2",{id:"purpose-of-page-layouts"},"Purpose of page layouts"),(0,l.mdx)("p",null,"The purpose of page layouts is to create a structured, common set of layout instructions to render pages. Most pages on a website can be categorized as fitting into a 1, 2, or 3-column container system. These page layouts can be selected in the admin panel to provide a specific layout per page."),(0,l.mdx)("h2",{id:"basic-layouts"},"Basic layouts"),(0,l.mdx)("p",null,"The basic view of all ",(0,l.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/storefront"},"storefront")," pages is defined in two page configuration layout files located in the Magento_Theme module:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"<Magento_Theme_module_dir>/view/frontend/layout/default.xml"),": defines the page layout."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"<Magento_Theme_module_dir>/view/frontend/layout/default_head_blocks.xml"),": defines the scripts, images, and meta data included in pages' ",(0,l.mdx)("inlineCode",{parentName:"li"},"<head>")," section.")),(0,l.mdx)("p",null,"These basic page configuration layouts are extended in other modules and in themes."),(0,l.mdx)("p",null,"You can also ",(0,l.mdx)("a",{parentName:"p",href:"extend.md"},"extend")," or ",(0,l.mdx)("a",{parentName:"p",href:"override.md"},"override")," these files in your custom theme."),(0,l.mdx)("h2",{id:"layout-handles"},"Layout handles"),(0,l.mdx)("p",null,"A ",(0,l.mdx)("em",{parentName:"p"},"layout handle")," is a uniquely identified set of ",(0,l.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/layout-instructions"},"layout instructions")," that serves as a name of a layout file."),(0,l.mdx)("p",null,"There are three kinds of layout handles:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"page-type layout handles"),' – Synonyms of the page type identifiers. Correspond to "full action names" of controller actions, for example, catalog_product_view.'),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"page layout handles")," – Identifiers of specific pages. Correspond to controller actions with parameters that identify specific pages, for example, catalog_product_view_type_simple_id_128 or for a CMS page, cms_page_view_id_home.xml."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"arbitrary handles")," - Do not correspond to any page type, but other handles use them by including.")),(0,l.mdx)("h2",{id:"layout-files-types-and-conventions"},"Layout files types and conventions"),(0,l.mdx)("h3",{id:"layout-file-types-by-role"},"Layout file types: by role"),(0,l.mdx)("p",null,"For a particular page, its layout is defined by two major layout components: ",(0,l.mdx)("em",{parentName:"p"},"page layout")," file and ",(0,l.mdx)("em",{parentName:"p"},"page configuration")," file (or ",(0,l.mdx)("em",{parentName:"p"},"generic layout")," for pages returned in AJAX requests, emails, and so on)."),(0,l.mdx)("p",null,"Following are the definitions of each layout file type:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("em",{parentName:"li"},"Page layout"),": an XML file declaring a page wireframe inside the ",(0,l.mdx)("inlineCode",{parentName:"li"},"<body>")," section of the HTML page markup, for example, two-column page layout."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("em",{parentName:"li"},"Page configuration"),": an XML file declaring detailed structure, contents and meta-information of a page (includes the ",(0,l.mdx)("inlineCode",{parentName:"li"},"<html>"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"<head>"),", and ",(0,l.mdx)("inlineCode",{parentName:"li"},"<body>")," sections of the HTML page markup)."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("em",{parentName:"li"},"Generic layout"),": an XML file declaring page detailed structure and contents inside the ",(0,l.mdx)("inlineCode",{parentName:"li"},"body")," section of the HTML page markup. Used for pages returned by AJAX requests, emails, HTML snippets, and so on.")),(0,l.mdx)("p",null,"For details, refer to ",(0,l.mdx)("a",{parentName:"p",href:"types.md"},"Layout file types"),"."),(0,l.mdx)("p",null,"In this guide we use ",(0,l.mdx)("em",{parentName:"p"},"layout files")," when talking about concepts which are similarly applied to all of these types of layout files."),(0,l.mdx)("h3",{id:"module-and-theme-layout-files"},"Module and theme layout files"),(0,l.mdx)("p",null,"The following terms are used to distinguish layouts provided by different application components:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("em",{parentName:"li"},"Base layouts"),": Layout files provided by modules. Conventional location:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Page configuration and generic layout files: ",(0,l.mdx)("inlineCode",{parentName:"li"},"<module_dir>/view/frontend/layout")),(0,l.mdx)("li",{parentName:"ul"},"Page layout files: ",(0,l.mdx)("inlineCode",{parentName:"li"},"<module_dir>/view/frontend/page_layout")))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("em",{parentName:"li"},"Theme layouts"),": Layout files provided by themes. Conventional location:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Page configuration and generic layout files: ",(0,l.mdx)("inlineCode",{parentName:"li"},"<theme_dir>/<Namespace>_<Module>/layout")),(0,l.mdx)("li",{parentName:"ul"},"Page layout files: ",(0,l.mdx)("inlineCode",{parentName:"li"},"<theme_dir>/<Namespace>_<Module>/page_layout"))))),(0,l.mdx)("h2",{id:"customize-layout"},"Customize layout"),(0,l.mdx)("p",null,"To ensure stability and secure your customizations from being deleted during upgrade, do not change out-of-the-box ",(0,l.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module")," and theme layouts.\nTo make the necessary changes, create ",(0,l.mdx)("a",{parentName:"p",href:"extend.md"},"extending")," and ",(0,l.mdx)("a",{parentName:"p",href:"override.md"},"overriding")," layout files in your custom theme."),(0,l.mdx)("h2",{id:"layout-files-processing"},"Layout files processing"),(0,l.mdx)("p",null,"The application processes layout files in the following order:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"Module base files loaded.")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"Module area files loaded.")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"Collects all layout files from modules. The order is determined by the modules order in the module list from the ",(0,l.mdx)("inlineCode",{parentName:"p"},"app/etc/config.php")," file. (If their priorities are equal, they are sorted according to their alphabetical priority.)")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"Determines the sequence of ",(0,l.mdx)("a",{parentName:"p",href:"../themes/inheritance.md"},"inherited")," themes ",(0,l.mdx)("inlineCode",{parentName:"p"},"[<parent_theme>, ..., <parent1_theme>] <current_theme>"))),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"Iterates the sequence of themes from last ancestor to current:"),(0,l.mdx)("p",{parentName:"li"},"a. Adds all extending theme layout files to the list."),(0,l.mdx)("p",{parentName:"li"},"b. Replaces overridden layout files in the list.")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"Merges all layout files from the list."))),(0,l.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"Layout files that belong to inactive modules or modules with disabled output are ignored."),(0,l.mdx)("h2",{id:"layout-files-validation"},"Layout files validation"),(0,l.mdx)("p",null,"After layouts are merged, the application validates them."),(0,l.mdx)("p",null,"Layout validations and error handling depends on the ",(0,l.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/config-guide/bootstrap/magento-modes.html"},"application mode")," in which your instance runs:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"developer mode: syntax is validated in ",(0,l.mdx)("inlineCode",{parentName:"p"},".xml")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},".xsd")," files, and ",(0,l.mdx)("inlineCode",{parentName:"p"},".xml")," files are validated according to the xsd schema. If any validation fails, the hard failure with process halt occurs.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"production or default modes: syntax is validated in ",(0,l.mdx)("inlineCode",{parentName:"p"},".xml")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},".xsd")," files. If validation fails, errors are logged to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"var/log")," directory without throwing an exception. The validation according to the xsd schema is not performed."))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-layouts-index-md-5685ff25ba05b9e9645d.js.map