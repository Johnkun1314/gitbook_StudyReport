/ *！
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 *包括Sizzle.js
 * https://sizzlejs.com/
 *
 *版权所有JS基金会和其他贡献者
 *根据MIT许可证发布
 * https://jquery.org/license
 *
 *日期：2018-01-20T17：24Z
 * /
（功能（全球，工厂）{

	“严格使用”;

	if（typeof module ===“object”&& typeof module.exports ===“object”）{

		//适用于CommonJS和类似CommonJS的环境，其中有一个正确的“窗口”
		//存在，执行工厂并获取jQuery。
		//对于没有带“文档”的“窗口”的环境
		//（例如Node.js），将工厂公开为module.exports。
		//这突出了创建一个真正的“窗口”的需要。
		//例如var jQuery = require（“jquery”）（window）;
		//有关详细信息，请参阅＃14549票。
		module.exports = global.document？
			工厂（全球，真实）：
			function（w）{
				if（！w.document）{
					抛出新错误（“jQuery需要一个带文档的窗口”）;
				}
				返厂（w）;
			};
	} else {
		工厂（全球）;
	}

//如果尚未定义窗口，请传递此项
}）（typeof window！==“undefined”？window：this，function（window，noGlobal）{

// Edge <= 12  -  13 +，Firefox <= 18  -  45 +，IE 10  -  11，Safari 5.1  -  9 +，iOS 6  -  9.1
//当非严格代码（例如，ASP.NET 4.5）访问严格模式时抛出异常
// arguments.callee.caller（trac-13335）。但是从jQuery 3.0（2016）开始，严格模式应该是常见的
//足以让所有这些尝试都在try块中得到保护。
“严格使用”;

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call（Object）;

var support = {};

var isFunction = function isFunction（obj）{

      //支持：Chrome <= 57，Firefox <= 52
      //在某些浏览器中，typeof为HTML <object>元素返回“function”
      //（即`typeof document.createElement（“object”）===“function”`）。
      //我们不想将* any * DOM节点归类为函数。
      return typeof obj ===“function”&& typeof obj.nodeType！==“number”;
  };


var isWindow = function isWindow（obj）{
		return obj！= null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		类型：true，
		src：是的，
		noModule：是的
	};

	function DOMEval（code，doc，node）{
		doc = doc || 文献;

		var i，
			script = doc.createElement（“script”）;

		script.text = code;
		if（node）{
			for（i in preservedScriptAttributes）{
				if（node [i]）{
					script [i] = node [i];
				}
			}
		}
		doc.head.appendChild（script）.parentNode.removeChild（script）;
	}


function toType（obj）{
	if（obj == null）{
		return obj +“”;
	}

	//支持：Android <= 2.3（功能RegExp）
	return typeof obj ===“object”|| typeof obj ===“功能”？
		class2type [toString.call（obj）] || “对象”：
		对象类型;
}
/ *全球符号* /
//在.eslintrc.json中定义此全局会产生使用全局的危险
//在另一个地方无人看守，为这个模块定义全局似乎更安全



VAR
	version =“3.3.1”，

	//定义jQuery的本地副本
	jQuery = function（selector，context）{

		// jQuery对象实际上只是init构造函数'enhanced'
		//如果调用了jQuery，则需要init（如果不包含则允许抛出错误）
		返回新的jQuery.fn.init（selector，context）;
	}，

	//支持：Android <= 4.0
	//确保我们修剪BOM和NBSP
	rtrim = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ / g;

jQuery.fn = jQuery.prototype = {

	//正在使用的jQuery的当前版本
	jquery：版本，

	构造函数：jQuery，

	// jQuery对象的默认长度为0
	长度：0，

	toArray：function（）{
		return slice.call（this）;
	}，

	//获取匹配元素集OR中的第N个元素
	//将整个匹配的元素集作为干净数组
	get：function（num）{

		//返回干净数组中的所有元素
		if（num == null）{
			return slice.call（this）;
		}

		//只返回集合中的一个元素
		返回num <0？这[num + this.length]：这个[num];
	}，

	//获取一系列元素并将其推入堆栈
	//（返回新的匹配元素集）
	pushStack：function（elems）{

		//构建一个新的jQuery匹配元素集
		var ret = jQuery.merge（this.constructor（），elems）;

		//将旧对象添加到堆栈中（作为参考）
		ret.prevObject = this;

		//返回新形成的元素集
		返回;
	}，

	//对匹配集中的每个元素执行回调。
	each：function（callback）{
		return jQuery.each（this，callback）;
	}，

	map：function（callback）{
		return this.pushStack（jQuery.map（this，function（elem，i）{
			return callback.call（elem，i，elem）;
		}）;;
	}，

	slice：function（）{
		return this.pushStack（slice.apply（this，arguments））;
	}，

	第一名：function（）{
		return this.eq（0）;
	}，

	last：function（）{
		return this.eq（-1）;
	}，

	eq：function（i）{
		var len = this.length，
			j = + i +（i <0？len：0）;
		return this.pushStack（j> = 0 && j <len？[this [j]]：[]）;
	}，

	结束：function（）{
		返回this.prevObject || this.constructor（）;
	}，

	// 仅限内部使用。
	//表现得像一个Array的方法，而不是像jQuery方法。
	推推，
	sort：arr.sort，
	拼接：arr.splice
};

jQuery.extend = jQuery.fn.extend = function（）{
	var options，name，src，copy，copyIsArray，clone，
		target = arguments [0] || {}，
		i = 1，
		length = arguments.length，
		deep = false;

	//处理深层复制情况
	if（typeof target ===“boolean”）{
		deep = target;

		//跳过布尔值和目标
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if（deep && copy &&（jQuery.isPlainObject（copy）||
					（copyIsArray = Array.isArray（copy））））{

					if（copyIsArray）{
						copyIsArray = false;
						clone = src && Array.isArray（src）？src：[];

					} else {
						clone = src && jQuery.isPlainObject（src）？src：{};
					}

					//永远不要移动原始对象，克隆它们
					target [name] = jQuery.extend（deep，clone，copy）;

				//不要引入未定义的值
				} else if（copy！== undefined）{
					target [name] = copy;
				}
			}
		}
	}

	//返回修改后的对象
	回归目标;
};

jQuery.extend（{

	//对于页面上的每个jQuery副本都是唯一的
	expando：“jQuery”+（version + Math.random（））.replace（/ \ D / g，“”），

	//假设没有ready模块就准备好了jQuery
	isReady：是的，

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		//请参阅https://github.com/eslint/eslint/issues/6125
		var name;

		for（obj中的名字）{
			返回false;
		}
		返回true;
	}，

	//在全局上下文中评估脚本
	globalEval：function（code）{
		DOMEval（代码）;
	}，

	each：function（obj，callback）{
		var length，i = 0;

		if（isArrayLike（obj））{
			length = obj.length;
			for（; i <length; i ++）{
				if（callback.call（obj [i]，i，obj [i]）=== false）{
					打破;
				}
			}
		} else {
			for（i in obj）{
				if（callback.call（obj [i]，i，obj [i]）=== false）{
					打破;
				}
			}
		}

		返回obj;
	}，

	//支持：Android <= 4.0
	trim：function（text）{
		return text == null？
			“”：
			（text +“”）。replace（rtrim，“”）;
	}，

	//结果仅供内部使用
	makeArray：function（arr，results）{
		var ret = results || [];

		if（arr！= null）{
			if（isArrayLike（Object（arr）））{
				jQuery.merge（ret，
					typeof arr ===“string”？
					[arr]：arr
				）;
			} else {
				push.call（ret，arr）;
			}
		}

		返回;
	}，

	inArray：function（elem，arr，i）{
		return arr == null？-1：indexOf.call（arr，elem，i）;
	}，

	//支持：仅限Android <= 4.0，仅限PhantomJS 1
	// push.apply（_，arraylike）抛出古老的WebKit
	合并：功能（第一，第二）{
		var len = + second.length，
			j = 0，
			i = first.length;

		for（; j <len; j ++）{
			first [i ++] = second [j];
		}

		first.length = i;

		先回来;
	}，

	grep：function（elems，callback，invert）{
		var callbackInverse，
			matches = []，
			i = 0，
			length = elems.length，
			callbackExpect =！invert;

		//浏览数组，只保存项目
		//传递验证器函数
		for（; i <length; i ++）{
			callbackInverse =！callback（elems [i]，i）;
			if（callbackInverse！== callbackExpect）{
				matches.push（elems [i]）;
			}
		}

		回归比赛;
	}，

	// arg仅供内部使用
	map：function（elems，callback，arg）{
		var length，value，
			i = 0，
			ret = [];

		//浏览数组，将每个项目转换为新值
		if（isArrayLike（elems））{
			length = elems.length;
			for（; i <length; i ++）{
				value = callback（elems [i]，i，arg）;

				if（value！= null）{
					ret.push（value）;
				}
			}

		//浏览对象上的每个键，
		} else {
			for（i in elems）{
				value = callback（elems [i]，i，arg）;

				if（value！= null）{
					ret.push（value）;
				}
			}
		}

		//展平任何嵌套数组
		return concat.apply（[]，ret）;
	}，

	//对象的全局GUID计数器
	guid：1，

	// jQuery.support未在Core中使用，但其他项目附加了它们
	//它的属性所以它需要存在。
	支持：支持
}）;

if（typeof Symbol ===“function”）{
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

//填充class2type映射
jQuery.each（“布尔值数字字符串函数数组日期RegExp对象错误符号”.split（“”），
function（i，name）{
	class2type [“[object”+ name +“]”] = name.toLowerCase（）;
}）;

function isArrayLike（obj）{

	//支持：仅限真正的iOS 8.2（在模拟器中不可重现）
	//`in`检查用于防止JIT错误（gh-2145）
	//由于漏报，因此不使用hasOwn
	//关于IE中的Nodelist长度
	在obj && obj.length中，var length = !! obj &&“length”，
		type = toType（obj）;

	if（isFunction（obj）|| isWindow（obj））{
		返回false;
	}

	返回类型===“数组”|| 长度=== 0 ||
		typeof length ===“number”&& length> 0 &&（length  -  1）in obj;
}
var Sizzle =
/ *！
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 *版权jQuery Foundation和其他贡献者
 *根据MIT许可证发布
 * http://jquery.org/license
 *
 *日期：2016-08-08
 * /
（功能（窗口）{

var i，
	支持，
	EXPR，
	gettext的，
	isXML，
	记号化，
	编译，
	选择，
	outermostContext，
	sortInput，
	hasDuplicate，

	//本地文档变量
	setDocument，
	文献，
	docElem，
	documentIsHTML，
	rbuggyQSA，
	rbuggyMatches，
	火柴，
	包含，

	//特定于实例的数据
	expando =“sizzle”+ 1 * new Date（），
	preferredDoc = window.document，
	dirruns = 0，
	完成= 0，
	classCache = createCache（），
	tokenCache = createCache（），
	compilerCache = createCache（），
	sortOrder = function（a，b）{
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push，
	slice = arr.slice，
	//使用精简的indexOf，因为它比native更快
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function（list，elem）{
		var i = 0，
			len = list.length;
		for（; i <len; i ++）{
			if（list [i] === elem）{
				回归我;
			}
		}
		返回-1;
	}，

	booleans =“checked | selected | async | autofocus | autoplay | controls | defer | disabled | hidden | ismap | loop | multiple | open | readonly | required | scoped”，

	// 常用表达

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace =“[\\ x20 \\ t \\ r \\ n \\ f]”，

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier =“（？：\\\\。| [\\ w-] | [^ \ 0  -  \\ xa0]）+”，

	//属性选择器：http：//www.w3.org/TR/selectors/#attribute-selectors
	attributes =“\\ [”+ whitespace +“*（”+ identifier +“）（？：”+ whitespace +
		//运算符（捕获2）
		“*（[* ^ $ |！〜]？=）”+空白+
		//“属性值必须是CSS标识符[capture 5]或字符串[capture 3或capture 4]”
		“*（？： '（（？：\\\\ | [^ \\\\']）*）'| \ “（（？：\\\\ | [^ \\\\\”] ）*）\“|（”+标识符+“））|）”+空白+
		“* \\]”，

	pseudos =“:(”+ identifier +“）（？：\\（（”+
		//要减少preFilter中需要tokenize的选择器数量，请更喜欢参数：
		// 1.引用（捕获3;捕获4或捕获5）
		“（ '（（？：\\\\ | [^ \\\\']）*）'| \ “（（？：\\\\ | [^ \\\\\”]）*） \“）|”+
		// 2.简单（捕获6）
		“（（？：\\\\。| [^ \\\\（）[\\]] |”+属性+“）*）|” +
		// 3.其他任何东西（捕获2）
		“。*”+
		“）\\）|）”，

	//前导和非转义尾随空格，捕获后者之前的一些非空白字符
	rwhitespace = new RegExp（空格+“+”，“g”），
	rtrim = new RegExp（“^”+ whitespace +“+ |（（？：^ | [^ \\\\]）（？：\\\\。）*）”+ whitespace +“+ $”，“g “），

	rcomma = new RegExp（“^”+ whitespace +“*，”+ whitespace +“*”），
	rcombinators = new RegExp（“^”+ whitespace +“*（[> +〜] |”+ whitespace +“）”+ whitespace +“*”），

	rattributeQuotes = new RegExp（“=”+ whitespace +“*（[^ \\]'\”] *？）“+ whitespace +”* \\]“，”g“），

	rpseudo =新的RegExp（伪），
	ridentifier = new RegExp（“^”+ identifier +“$”），

	matchExpr = {
		“ID”：新的RegExp（“^＃（”+ + identifier +“）”），
		“CLASS”：新的RegExp（“^ \\。（”+ identifier +“）”），
		“TAG”：新的RegExp（“^（”+ identifier +“| [*]）”），
		“ATTR”：新的RegExp（“^”+属性），
		“PSEUDO”：新的RegExp（“^”+ pseudos），
		“CHILD”：新的RegExp（“^ :(仅|第一|最后|第n |第n  - 最后） - （子类型）（？：\\（”+ + whitespace +
			“*（偶数|奇数|（（[+  - ] |）（\\ d *）n |）”+空格+“*（？：（[+  - ] |）”+空白+
			“*（\\ d +）|））”+ whitespace +“* \\）|）”，“i”），
		“bool”：新的RegExp（“^（？：”+ booleans +“）$”，“i”），
		//用于实现.is（）的库
		//我们在`select`中使用它进行POS匹配
		“needsContext”：新的RegExp（“^”+空格+“* [> +〜] | :(偶数|奇数| eq | gt | lt | nth | first | last）（？：\\（”+
			空格+“*（（？： -  \\ d）？\\ d *）”+空格+“* \\）|）（？= [^  - ] | $）”，“i”）
	}，

	rinputs = / ^（？：input | select | textarea | button）$ / i，
	rheader = / ^ h \ d $ / i，

	rnative = / ^ [^ {] + \ {\ s * \ [native \ w /，

	//易于解析/可检索的ID或TAG或CLASS选择器
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\ .( [.w-] +））$ /，

	rsibling = / [+〜] /，

	// CSS逃脱
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high =“0x”+转义 -  0x10000;
		// NaN表示非代码点
		//支持：Firefox <24
		//解决错误的数字解释+“0x”
		返回高！==高|| 逃过白天？
			逃脱：
			高<0？
				// BMP代码点
				String.fromCharCode（high + 0x10000）：
				//补充平面代码点（代理对）
				String.fromCharCode（high >> 10 | 0xD800，high＆0x3FF | 0xDC00）;
	}，

	// CSS字符串/标识符序列化
	// https://drafts.c​​sswg.org/cssom/#common-serializing-idioms
	rcssescape = /（[\ 0- \ x1f \ x7f] | ^  - ？\ d）| ^  -  $ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w  - ] / g，
	fcssescape = function（ch，asCodePoint）{
		if（asCodePoint）{

			// U + 0000 NULL变为U + FFFD REPLACEMENT CHARACTER
			if（ch ===“\ 0”）{
				返回“\ uFFFD”;
			}

			//控制字符和（取决于位置）数字作为代码点转义
			return ch.slice（0，-1）+“\\”+ ch.charCodeAt（ch.length  -  1）.toString（16）+“”;
		}

		//其他可能特殊的ASCII字符获得反斜杠转义
		返回“\\”+ ch;
	}，

	//用于iframe
	//请参阅setDocument（）
	//删除函数包装导致“权限被拒绝”
	// IE中的错误
	unloadHandler = function（）{
		setDocument（）;
	}，

	disabledAncestor = addCombinator（
		function（elem）{
			return elem.disabled === true &&（elem中的“form”| elem中的“form”）;
		}，
		{dir：“parentNode”，下一个：“legend”}
	）;

//优化push.apply（_，NodeList）
尝试{
	push.apply（
		（arr = slice.call（preferredDoc.childNodes）），
		preferredDoc.childNodes
	）;
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName）{

					push.apply（results，context.getElementsByClassName（m））;
					返回结果;
				}
			}

			//利用querySelectorAll
			if（support.qsa &&
				！compilerCache [selector +“”] &&
				（！rbuggyQSA ||！rbuggyQSA.test（selector）））{

				if（nodeType！== 1）{
					newContext = context;
					newSelector = selector;

				// qSA查看Element上下文，这不是我们想要的
				//感谢Andrew Dupont提供的这种解决方法
				//支持：IE <= 8
				//排除对象元素
				} else if（context.nodeName.toLowerCase（）！==“object”）{

					//捕获上下文ID，必要时先设置它
					if（（nid = context.getAttribute（“id”）））{
						nid = nid.replace（rcssescape，fcssescape）;
					} else {
						context.setAttribute（“id”，（nid = expando））;
					}

					//在列表中添加每个选择器的前缀
					groups = tokenize（selector）;
					i = groups.length;
					当我 -  ） {
						groups [i] =“＃”+ nid +“”+ toSelector（groups [i]）;
					}
					newSelector = groups.join（“，”）;

					//展开兄弟选择器的上下文
					newContext = rsibling.test（selector）&& testContext（context.parentNode）||
						上下文;
				}

				if（newSelector）{
					尝试{
						push.apply（结果，
							newContext.querySelectorAll（newSelector）
						）;
						返回结果;
					} catch（qsaError）{
					} finally {
						if（nid === expando）{
							context.removeAttribute（“id”）;
						}
					}
				}
			}
		}
	}

	// 所有其他人
	return select（selector.replace（rtrim，“$ 1”），context，results，seed）;
}

/ **
 *创建有限大小的键值缓存
 * @returns {function（string，object）}将对象数据存储在自身后，返回对象数据
 *属性名称（带空格的）字符串和（如果缓存大于Expr.cacheLength）
 *删除最旧的条目
 * /
function createCache（）{
	var keys = [];

	function cache（key，value）{
		//使用（键+“”）避免与本机原型属性冲突（请参阅问题＃157）
		if（keys.push（key +“”）> Expr.cacheLength）{
			//仅保留最新的条目
			delete cache [keys.shift（）];
		}
		return（cache [key +“”] = value）;
	}
	返回缓存;
}

/ **
 *标记Sizzle特殊用途的功能
 * @param {Function} fn要标记的功能
 * /
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle（attrs，handler）{
	var arr = attrs.split（“|”），
		i = arr.length;

	当我 -  ） {
		Expr.attrHandle [arr [i]] =处理程序;
	}
}

/ **
 *检查两个兄弟姐妹的文件顺序
 * @param {Element} a
 * @param {Element} b
 * @returns {Number}如果a在b之前，则返回小于0，如果a跟随b，则返回大于0
 * /
function siblingCheck（a，b）{
	var cur = b && a，
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex  -  b.sourceIndex;

	//如果在两个节点上都可用，则使用IE sourceIndex
	if（diff）{
		返回差异;
	}

	//检查b是否跟随a
	if（cur）{
		while（（cur = cur.nextSibling））{
			if（cur === b）{
				返回-1;
			}
		}
	}

	回来了？1：-1;
}

/ **
 *返回在伪输入中用于输入类型的函数
 * @param {String}类型
 * /
function createInputPseudo（type）{
	return函数（elem）{
		var name = elem.nodeName.toLowerCase（）;
		返回名称===“输入”&& elem.type === type;
	};
}

/ **
 *返回一个用于按钮的伪函数
 * @param {String}类型
 * /
function createButtonPseudo（type）{
	return函数（elem）{
		var name = elem.nodeName.toLowerCase（）;
		return（name ===“input”|| name ===“button”）&& elem.type === type;
	};
}

/ **
 *返回在伪中使用的函数：enabled /：disabled
 * @param {Boolean}禁用true表示：已禁用; false for：启用
 * /
function createDisabledPseudo（disabled）{

	//已知：禁用误报：fieldset [disabled]> legend：nth-​​of-type（n + 2）：can-disable
	return函数（elem）{

		//只有某些元素可以匹配：启用或：禁用
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if（elem中的“form”）{

			//检查相关非禁用元素的继承禁用：
			// *在禁用的字段集中列出与表单相关的元素
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// *禁用的optgroup中的选项元素
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			//所有这些元素都有一个“form”属性。
			if（elem.parentNode && elem.disabled === false）{

				//选项元素如果存在，则推迟到父选择组
				if（elem中的“label”）{
					if（elem.parentNode中的“label”）{
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction（function（seed，matches）{
			var j，
				matchIndexes = fn（[]，seed.length，argument），
				i = matchIndexes.length;

			//匹配在指定索引处找到的元素
			当我 -  ） {
				if（seed [（j = matchIndexes [i]）]）{
					seed [j] =！（匹配[j] = seed [j]）;
				}
			}
		}）;
	}）;
}

/ **
 *检查节点的有效性作为Sizzle上下文
 * @param {Element | Object =}上下文
 * @returns {Element | Object | Boolean}输入节点（如果可接受），否则为假值
 * /
function testContext（context）{
	return context && typeof context.getElementsByTagName！==“undefined”&& context;
}

//为方便起见，公开支持变量
support = Sizzle.support = {};

/ **
 *检测XML节点
 * @param {Element | Object} elem元素或文档
 * @returns {Boolean}如果iff elem是非HTML XML节点，则为true
 * /
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if（doc === document || doc.nodeType！== 9 ||！doc.documentElement）{
		退货文件;
	}

	//更新全局变量
	document = doc;
	docElem = document.documentElement;
	documentIsHTML =！isXML（document）;

	//支持：IE 9-11，Edge
	//卸载后访问iframe文档会抛出“权限被拒绝”错误（jQuery＃13936）
	if（preferredDoc！== document &&
		（subWindow = document.defaultView）&& subWindow.top！== subWindow）{

		//支持：IE 11，Edge
		if（subWindow.addEventListener）{
			subWindow.addEventListener（“unload”，unloadHandler，false）;

		//支持：仅限IE 9  -  10
		} else if（subWindow.attachEvent）{
			subWindow.attachEvent（“onunload”，unloadHandler）;
		}
	}

	/ *属性
	-------------------------------------------------- -------------------- * /

	//支持：IE <8
	//确认getAttribute确实返回属性而不是属性
	//（IE8布尔除外）
	support.attributes = assert（function（el）{
		el.className =“i”;
		return！el.getAttribute（“className”）;
	}）;

	/ * getElement（s）By *
	-------------------------------------------------- -------------------- * /

	//检查getElementsByTagName（“*”）是否仅返回元素
	support.getElementsByTagName = assert（function（el）{
		el.appendChild（document.createComment（“”））;
		return！el.getElementsByTagName（“*”）。length;
	}）;

	//支持：IE <9
	support.getElementsByClassName = rnative.test（document.getElementsByClassName）;

	//支持：IE <10
	//检查getElementById是否按名称返回元素
	//破坏的getElementById方法不会以编程方式设置名称，
	//所以使用环形交叉口getElementsByName测试
	support.getById = assert（function（el）{
		docElem.appendChild（el）.id = expando;
		return！document.getElementsByName || ！document.getElementsByName（expando）.length;
	}）;

	// ID过滤并查找
	if（support.getById）{
		Expr.filter [“ID”] =函数（id）{
			var attrId = id.replace（runescape，funescape）;
			return函数（elem）{
				return elem.getAttribute（“id”）=== attrId;
			};
		};
		Expr.find [“ID”] = function（id，context）{
			if（typeof context.getElementById！==“undefined”&& documentIsHTML）{
				var elem = context.getElementById（id）;
				返回元素？[elem]：[];
			}
		};
	} else {
		Expr.filter [“ID”] =函数（id）{
			var attrId = id.replace（runescape，funescape）;
			return函数（elem）{
				var node = typeof elem.getAttributeNode！==“undefined”&&
					elem.getAttributeNode（ “ID”）;
				return node && node.value === attrId;
			};
		};

		//支持：仅限IE 6  -  7
		// getElementById作为查找快捷方式不可靠
		Expr.find [“ID”] = function（id，context）{
			if（typeof context.getElementById！==“undefined”&& documentIsHTML）{
				var node，i，elems，
					elem = context.getElementById（id）;

				if（elem）{

					//验证id属性
					node = elem.getAttributeNode（“id”）;
					if（node && node.value === id）{
						返回[elem];
					}

					//回到getElementsByName
					elems = context.getElementsByName（id）;
					i = 0;
					while（（elem = elems [i ++]））{
						node = elem.getAttributeNode（“id”）;
						if（node && node.value === id）{
							返回[elem];
						}
					}
				}

				return [];
			}
		};
	}

	// 标签
	Expr.find [“TAG”] = support.getElementsByTagName？
		function（tag，context）{
			if（typeof context.getElementsByTagName！==“undefined”）{
				return context.getElementsByTagName（tag）;

			// DocumentFragment节点没有gEBTN
			} else if（support.qsa）{
				return context.querySelectorAll（tag）;
			}
		}：

		function（tag，context）{
			var elem，
				tmp = []，
				i = 0，
				//幸运的是巧合，一个（破碎的）gEBTN也出现在DocumentFragment节点上
				results = context.getElementsByTagName（tag）;

			//过滤掉可能的评论
			if（tag ===“*”）{
				while（（elem = results [i ++]））{
					if（elem.nodeType === 1）{
						tmp.push（elem）;
					}
				}

				返回tmp;
			}
			返回结果;
		};

	//类
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			//测试属性在Opera中必须是未知的，但对WinRT来说是“安全的”
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if（el.querySelectorAll（“[msallowcapture ^ ='']”）。length）{
				rbuggyQSA.push（“[* ^ $] =”+ whitespace +“*（？：''| \”\“）”）;
			}

			//支持：IE8
			//布尔属性和“值”未得到正确处理
			if（！el.querySelectorAll（“[selected]”）。length）{
				rbuggyQSA.push（“\\ [”+ whitespace +“*（?: value |”+ booleans +“）”）;
			}

			//支持：Chrome <29，Android <4.4，Safari <7.0 +，iOS <7.0+，PhantomJS <1.9.8+
			if（！el.querySelectorAll（“[id~ =”+ expando +“ - ]”）。length）{
				rbuggyQSA.push（ “〜=”）;
			}

			// Webkit / Opera  - ：checked应返回选定的选项元素
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8在这里抛出错误，不会看到以后的测试
			if（！el.querySelectorAll（“：checked”）。length）{
				rbuggyQSA.push（ “：检查”）;
			}

			//支持：Safari 8 +，iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			//页内`selector #id兄弟组合选择器'失败
			if（！el.querySelectorAll（“a＃”+ expando +“+ *”）。length）{
				rbuggyQSA.push（ “＃+ [+〜]。”）;
			}
		}）;

		断言（function（el）{
			el.innerHTML =“<a href=''disable='disabled'> </a>”+
				“<select disabled ='disabled'> <option /> </ select>”;

			//支持：Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll（ “* ,: X”）;
			rbuggyQSA.push（ “*：”）;
		}）;
	}

	if（（support.matchesSelector = rnative.test（（matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector））））{

		断言（function（el）{
			//检查是否可以执行matchesSelector
			//在断开连接的节点上（IE 9）
			support.disconnectedMatch = matches.call（el，“*”）;

			//这应该失败并出现异常
			// Gecko没有错误，而是返回false
			matches.call（el，“[s！='']：x”）;
			rbuggyMatches.push（“！=”，pseudos）;
		}）;
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp（rbuggyQSA.join（“|”））;
	rbuggyMatches = rbuggyMatches.length && new RegExp（rbuggyMatches.join（“|”））;

	/ *包含
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test（docElem.compareDocumentPosition）;

	//元素包含另一个
	//有目的地自我排斥
	//在中，元素不包含自身
	contains = hasCompare || rnative.test（docElem.contains）？
		function（a，b）{
			var adown = a.nodeType === 9？a.documentElement：a，
				bup = b && b.parentNode;
			返回=== bup || !!（bup && bup.nodeType === 1 &&（
				adown.contains？
					adown.contains（bup）：
					a.compareDocumentPosition && a.compareDocumentPosition（bup）＆16
			））;
		}：
		function（a，b）{
			if（b）{
				while（（b = b.parentNode））{
					if（b === a）{
						返回true;
					}
				}
			}
			返回false;
		};

	/ *排序
	-------------------------------------------------- -------------------- * /

	//文档订单排序
	sortOrder = hasCompare？
	function（a，b）{

		//重复删除标记
		if（a === b）{
			hasDuplicate = true;
			返回0;
		}

		//如果只有一个输入具有compareDocumentPosition，则排序方法存在
		var compare =！a.compareDocumentPosition  - ！b.compareDocumentPosition;
		if（compare）{
			回报比较;
		}

		//如果两个输入都属于同一文档，则计算位置
		compare =（a.ownerDocument || a）===（b.ownerDocument || b）？
			a.compareDocumentPosition（b）：

			//否则我们知道他们已断开连接
			1;

		//已断开连接的节点
		if（比较＆1 ||
			（！support.sortDetached && b.compareDocumentPosition（a）=== compare））{

			//选择与我们首选文档相关的第一个元素
			if（a === document || a.ownerDocument === preferredDoc && contains（preferredDoc，a））{
				返回-1;
			}
			if（b === document || b.ownerDocument === preferredDoc && contains（preferredDoc，b））{
				返回1;
			}

			//保持原始订单
			返回sortInput？
				（indexOf（sortInput，a） -  indexOf（sortInput，b））：
				0;
		}

		返回比较＆4？-1：1;
	}：
	function（a，b）{
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			//做兄弟检查节点是否有共同的祖先
			siblingCheck（ap [i]，bp [i]）：

			//否则我们文档中的节点首先排序
			ap [i] === preferredDoc？-1：
			bp [i] === preferredDoc？1：
			0;
	};

	退货文件;
};

Sizzle.matches = function（expr，elements）{
	return Sizzle（expr，null，null，elements）;
};

Sizzle.matchesSelector = function（elem，expr）{
	//如果需要，设置文档变量
	if（（elem.ownerDocument || elem）！== document）{
		setDocument（elem）;
	}

	//确保引用属性选择器
	expr = expr.replace（rattributeQuotes，“='$ 1']”）;

	if（support.matchesSelector && documentIsHTML &&
		！compilerCache [expr +“”] &&
		（！rbuggyMatches ||！rbuggyMatches.test（expr））&&
		（！rbuggyQSA ||！rbuggyQSA.test（expr）））{

		尝试{
			var ret = matches.call（elem，expr）;

			// IE 9的matchesSelector在断开连接的节点上返回false
			if（ret || support.disconnectedMatch ||
					//同样，断开连接的节点也被称为文档
					// IE 9中的片段
					elem.document && elem.document.nodeType！== 11）{
				返回;
			}
		} catch（e）{}
	}

	return Sizzle（expr，document，null，[elem]）。length> 0;
};

Sizzle.contains = function（context，elem）{
	//如果需要，设置文档变量
	if（（context.ownerDocument || context）！== document）{
		setDocument（context）;
	}
	return contains（context，elem）;
};

Sizzle.attr = function（elem，name）{
	//如果需要，设置文档变量
	if（（elem.ownerDocument || elem）！== document）{
		setDocument（elem）;
	}

	var fn = Expr.attrHandle [name.toLowerCase（）]，
		//不要被Object.prototype属性愚弄（jQuery＃13807）
		val = fn && hasOwn.call（Expr.attrHandle，name.toLowerCase（））？
			fn（elem，name，！documentIsHTML）：
			不确定的;

	return val！== undefined？
		val：
		support.attributes || ！documentIsHTML？
			elem.getAttribute（name）：
			（val = elem.getAttributeNode（name））&& val.specified？
				val.value：
				空值;
};

Sizzle.escape = function（sel）{
	return（sel +“”）.replace（rcssescape，fcssescape）;
};

Sizzle.error = function（msg）{
	抛出新错误（“语法错误，无法识别的表达式：”+ msg）;
};

/ **
 *文件分类和删除重复
 * @param {ArrayLike}结果
 * /
Sizzle.uniqueSort = function（results）{
	var elem，
		duplicates = []，
		j = 0，
		i = 0;

	//除非我们*知道*我们可以检测到重复，否则请假设它们存在
	hasDuplicate =！support.detectDuplicates;
	sortInput =！support.sortStable && results.slice（0）;
	results.sort（sortOrder）;

	if（hasDuplicate）{
		while（（elem = results [i ++]））{
			if（elem === results [i]）{
				j = duplicates.push（i）;
			}
		}
		while（j--）{
			results.splice（duplicates [j]，1）;
		}
	}

	//排序后清除输入以释放对象
	//请参阅https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	返回结果;
};

/ **
 *实用程序函数，用于检索DOM节点数组的文本值
 * @param {Array | Element} elem
 * /
getText = Sizzle.getText = function（elem）{
	var节点，
		ret =“”，
		i = 0，
		nodeType = elem.nodeType;

	if（！nodeType）{
		//如果没有nodeType，那么这应该是一个数组
		while（（node = elem [i ++]））{
			//不要遍历评论节点
			ret + = getText（node）;
		}
	} else if（nodeType === 1 || nodeType === 9 || nodeType === 11）{
		//对元素使用textContent
		//删除了innerText用法以保证新行的一致性（jQuery＃11153）
		if（typeof elem.textContent ===“string”）{
			return elem.textContent;
		} else {
			//穿越它的孩子
			for（elem = elem.firstChild; elem; elem = elem.nextSibling）{
				ret + = getText（elem）;
			}
		}
	} else if（nodeType === 3 || nodeType === 4）{
		return elem.nodeValue;
	}
	//不包括注释或处理指令节点

	返回;
};

Expr = Sizzle.selectors = {

	//可以由用户调整
	cacheLength：50，

	createPseudo：markFunction，

	匹配：matchExpr，

	attrHandle：{}，

	找： {}，

	亲戚：{
		“>”：{dir：“parentNode”，first：true}，
		“”：{dir：“parentNode”}，
		“+”：{dir：“previousSibling”，first：true}，
		“〜”：{dir：“previousSibling”}
	}，

	preFilter：{
		“ATTR”：function（match）{
			match [1] = match [1] .replace（runescape，funescape）;

			//移动给定值以匹配[3]是引用还是不引用
			match [3] =（match [3] || match [4] || match [5] ||“”）.replace（runescape，funescape）;

			if（match [2] ===“〜=”）{
				match [3] =“”+ match [3] +“”;
			}

			return match.slice（0,4）;
		}，

		“CHILD”：function（match）{
			/ *匹配来自matchExpr [“CHILD”]
				1种类型（仅| nth | ...）
				2什么（孩子的类型）
				3个参数（偶数|奇数| \ d * | \ d * n（[+  - ] \ d +）？| ...）
				xn + y参数的4 xn分量（[+  - ]？\ d * n |）
				5个xn分量的符号
				6 x xn-component
				y分量的7个符号
				y元素8 y
			* /
			match [1] = match [1] .toLowerCase（）;

			if（match [1] .slice（0,3）===“nth”）{
				// nth- *需要参数
				if（！match [3]）{
					Sizzle.error（匹配[0]）;
				}

				// Expr.filter.CHILD的数字x和y参数
				//记住false / true分别为0/1
				match [4] = +（match [4]？match [5] +（match [6] || 1）：2 *（match [3] ===“even”|| match [3] ===“奇怪的“））;
				match [5] = +（（match [7] + match [8]）|| match [3] ===“odd”）;

			//其他类型禁止参数
			} else if（match [3]）{
				Sizzle.error（匹配[0]）;
			}

			回归比赛;
		}，

		“PSEUDO”：function（match）{
			var过剩，
				unquoted =！match [6] && match [2];

			if（matchExpr [“CHILD”]。test（match [0]））{
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		“ATTR”：函数（名称，运算符，检查）{
			return函数（elem）{
				var result = Sizzle.attr（elem，name）;

				if（result == null）{
					return operator ===“！=”;
				}
				if（！operator）{
					返回true;
				}

				结果+ =“”;

				return operator ===“=”？结果===检查：
					operator ===“！=”？结果！==检查：
					operator ===“^ =”？check && result.indexOf（check）=== 0：
					operator ===“* =”？check && result.indexOf（check）> -1：
					operator ===“$ =”？check && result.slice（-check.length）=== check：
					operator ===“〜=”？（“”+ result.replace（rwhitespace，“”）+“”）。indexOf（check）> -1：
					operator ===“| =”？结果===检查|| result.slice（0，check.length + 1）=== check +“ - ”：
					假;
			};
		}，

		“CHILD”：函数（类型，内容，参数，第一个，最后一个）{
			var simple = type.slice（0,3）！==“nth”，
				forward = type.slice（-4）！==“last”，
				ofType = what ===“of-type”;

			先退回=== 1 && last === 0？

				//快捷方式：第n  -  *（n）
				function（elem）{
					return !! elem.parentNode;
				}：

				function（elem，context，xml）{
					var cache，uniqueCache，outerCache，node，nodeIndex，start，
						dir =简单！==转发？“nextSibling”：“previousSibling”，
						parent = elem.parentNode，
						name = ofType && elem.nodeName.toLowerCase（），
						useCache =！xml &&！ofType，
						diff = false;

					if（parent）{

						// :( first | last | only） - （child | of-type）
						if（simple）{
							while（dir）{
								node = elem;
								while（（node = node [dir]））{
									if（ofType？
										node.nodeName.toLowerCase（）=== name：
										node.nodeType === 1）{

										返回false;
									}
								}
								//反向：仅 -  *（如果我们还没有这样做）
								start = dir = type ===“only”&&！start &&“nextSibling”;
							}
							返回true;
						}

						开始= [前进？parent.firstChild：parent.lastChild];

						// non-xml：nth-​​child（...）将缓存数据存储在`parent`上
						if（forward && useCache）{

							//从先前缓存的索引中搜索`elem`

							// ...以gzip友好的方式
							node = parent;
							outerCache = node [expando] || （node [expando] = {}）;

							//支持：IE <9
							//抵御克隆的attroperties（jQuery gh-1709）
							uniqueCache = outerCache [node.uniqueID] ||
								（outerCache [node.uniqueID] = {}）;

							cache = uniqueCache [type] || [];
							nodeIndex = cache [0] === dirruns && cache [1];
							diff = nodeIndex && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							while（（node = ++ nodeIndex && node && node [dir] ||

								//从一开始就回到寻求“elem”
								（diff = nodeIndex = 0）|| start.pop（）））{

								//找到后，在`parent`上缓存索引并中断
								if（node.nodeType === 1 && ++ diff && node === elem）{
									uniqueCache [type] = [dirruns，nodeIndex，diff];
									打破;
								}
							}

						} else {
							//使用先前缓存的元素索引（如果可用）
							if（useCache）{
								// ...以gzip友好的方式
								node = elem;
								outerCache = node [expando] || （node [expando] = {}）;

								//支持：IE <9
								//抵御克隆的attroperties（jQuery gh-1709）
								uniqueCache = outerCache [node.uniqueID] ||
									（outerCache [node.uniqueID] = {}）;

								cache = uniqueCache [type] || [];
								nodeIndex = cache [0] === dirruns && cache [1];
								diff = nodeIndex;
							}

							// xml：nth-​​child（...）
							//或：nth-​​last-child（...）或：nth（-last）？ -  of-type（...）
							if（diff === false）{
								//使用与上面相同的循环从头开始寻找`elem`
								while（（node = ++ nodeIndex && node && node [dir] ||
									（diff = nodeIndex = 0）|| start.pop（）））{

									if（（ofType？
										node.nodeName.toLowerCase（）=== name：
										node.nodeType === 1）&&
										++ diff）{

										//缓存每个遇到元素的索引
										if（useCache）{
											outerCache = node [expando] || （node [expando] = {}）;

											//支持：IE <9
											//抵御克隆的attroperties（jQuery gh-1709）
											uniqueCache = outerCache [node.uniqueID] ||
												（outerCache [node.uniqueID] = {}）;

											uniqueCache [type] = [dirruns，diff];
										}

										if（node === elem）{
											打破;
										}
									}
								}
							}
						}

						//合并偏移量，然后检查循环大小
						diff  -  = last;
						return diff === first || （diff％first === 0 && diff / first> = 0）;
					}
				};
		}，

		“PSEUDO”：function（伪，参数）{
			//伪类名称不区分大小写
			// http://www.w3.org/TR/selectors/#pseudo-classes
			//如果使用大写字母添加自定义伪，则按大小写区分优先级
			//记住setFilters继承自pseudos
			var args，
				fn = Expr.pseudos [伪] || Expr.setFilters [pseudo.toLowerCase（）] ||
					Sizzle.error（“unsupported pseudo：”+ pseudo）;

			//用户可以使用createPseudo来指示
			//创建过滤函数需要参数
			//正如Sizzle所做的那样
			if（fn [expando]）{
				return fn（argument）;
			}

			//但保持对旧签名的支持
			if（fn.length> 1）{
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction（function（seed，matches，context，xml）{
					var elem，
						unmatched = matcher（seed，null，xml，[]），
						i = seed.length;

					//匹配`matcher`无法匹配的元素
					当我 -  ） {
						if（（elem = unmatched [i]））{
							seed [i] =！（匹配[i] = elem）;
						}
					}
				}）：
				function（elem，context，xml）{
					input [0] = elem;
					matcher（输入，null，xml，结果）;
					//不要保留元素（问题＃299）
					input [0] = null;
					return！results.pop（）;
				};
		}），

		“has”：markFunction（function（selector）{
			return函数（elem）{
				return Sizzle（selector，elem）.length> 0;
			};
		}），

		“contains”：markFunction（function（text）{
			text = text.replace（runescape，funescape）;
			return函数（elem）{
				return（elem.textContent || elem.innerText || getText（elem））。indexOf（text）> -1;
			};
		}），

		//“元素是否由：lang（）选择器表示
		//仅基于元素的语言值
		//等于标识符C，
		//或者以标识符C开头，后面紧跟“ - ”。
		//不区分大小写地执行C与元素语言值的匹配。
		//标识符C不必是有效的语言名称。“
		// http://www.w3.org/TR/selectors/#lang-pseudo
		“lang”：markFunction（function（lang）{
			// lang值必须是有效的标识符
			if（！ridentifier.test（lang ||“”））{
				Sizzle.error（“不支持lang：”+ lang）;
			}
			lang = lang.replace（runescape，funescape）.toLowerCase（）;
			return函数（elem）{
				var elemLang;
				做{
					if（（elemLang = documentIsHTML？
						elem.lang：
						elem.getAttribute（“xml：lang”）|| elem.getAttribute（“lang”）））{

						elemLang = elemLang.toLowerCase（）;
						返回elemLang === lang || elemLang.indexOf（lang +“ - ”）=== 0;
					}
				}（（elem = elem.parentNode）&& elem.nodeType === 1）;
				返回false;
			};
		}），

		//杂项
		“target”：function（elem）{
			var hash = window.location && window.location.hash;
			return hash && hash.slice（1）=== elem.id;
		}，

		“root”：function（elem）{
			return elem === docElem;
		}，

		“focus”：function（elem）{
			return elem === document.activeElement &&（！document.hasFocus || document.hasFocus（））&& !!（elem.type || elem.href || ~elem.tabIndex）;
		}，

		//布尔属性
		“enabled”：createDisabledPseudo（false），
		“disabled”：createDisabledPseudo（true），

		“checked”：function（elem）{
			//在CSS3中，：checked应返回已选中和已选中的元素
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase（）;
			return（nodeName ===“input”&& !! elem.checked）|| （nodeName ===“option”&& !! elem.selected）;
		}，

		“selected”：function（elem）{
			//访问此属性会默认选中
			// Safari中的选项正常工作
			if（elem.parentNode）{
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		}，

		//内容
		“empty”：function（elem）{
			// http://www.w3.org/TR/selectors/#empty-pseudo
			//：empty由element（1）或内容节点（text：3; cdata：4; entity ref：5）取消，
			//但不是其他人（评论：8;处理指令：7;等）
			// nodeType <6有效，因为attributes（2）不显示为子项
			for（elem = elem.firstChild; elem; elem = elem.nextSibling）{
				if（elem.nodeType <6）{
					返回false;
				}
			}
			返回true;
		}，

		“parent”：function（elem）{
			返回！Expr.pseudos [“empty”]（elem）;
		}，

		//元素/输入类型
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase（）;
			返回名称===“输入”&& elem.type ===“按钮”|| name ===“button”;
		}，

		“text”：function（elem）{
			var attr;
			return elem.nodeName.toLowerCase（）===“input”&&
				elem.type ===“text”&&

				//支持：IE <8
				//新的HTML5属性值（例如“搜索”）与elem.type ===“text”一起出现
				（（attr = elem.getAttribute（“type”））== null || attr.toLowerCase（）===“text”）;
		}，

		//收集位置
		“first”：createPositionalPseudo（function（）{
			return [0];
		}），

		“last”：createPositionalPseudo（function（matchIndexes，length）{
			return [length  -  1];
		}），

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos [“nth”] = Expr.pseudos [“eq”];

//添加按钮/输入类型伪
for（i in {radio：true，checkbox：true，file：true，password：true，image：true}）{
	Expr.pseudos [i] = createInputPseudo（i）;
}
for（i in {submit：true，reset：true}）{
	Expr.pseudos [i] = createButtonPseudo（i）;
}

//用于创建新setFilters的Easy API
function setFilters（）{}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters（）;

tokenize = Sizzle.tokenize = function（selector，parseOnly）{
	var匹配，匹配，令牌，类型，
		soFar，groups，preFilters，
		cached = tokenCache [selector +“”];

	if（缓存）{
		返回parseOnly？0：cached.slice（0）;
	}

	soFar =选择器;
	groups = [];
	preFilters = Expr.preFilter;

	while（soFar）{

		//逗号和第一次运行
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice（match [0] .length）|| 至今;
			}
			groups.push（（tokens = []））;
		}

		匹配=假;

		//组合
		if（（match = rcombinators.exec（soFar）））{
			matched = match.shift（）;
			tokens.push（{
				价值：匹配，
				//将后代组合子投射到空间
				type：match [0] .replace（rtrim，“”）
			}）;
			soFar = soFar.slice（matched.length）;
		}

		//过滤器
		for（在Expr.filter中输入）{
			if（（match = matchExpr [type] .exec（soFar））&&（！preFilters [type] ||
				（match = preFilters [type]（match））））{
				matched = match.shift（）;
				tokens.push（{
					价值：匹配，
					类型：类型，
					匹配：匹配
				}）;
				soFar = soFar.slice（matched.length）;
			}
		}

		if（！matched）{
			打破;
		}
	}

	//返回无效多余的长度
	//如果我们只是解析
	//否则，抛出错误或返回令牌
	返回parseOnly？
		soFar.length：
		至今 ？
			Sizzle.error（选择器）：
			//缓存令牌
			tokenCache（selector，groups）.slice（0）;
};

function toSelector（tokens）{
	var i = 0，
		len = tokens.length，
		selector =“”;
	for（; i <len; i ++）{
		selector + = tokens [i] .value;
	}
	返回选择器;
}

function addCombinator（matcher，combinator，base）{
	var dir = combinator.dir，
		skip = combinator.next，
		key = skip || DIR，
		checkNonElements = base && key ===“parentNode”，
		doneName = done ++;

	返回combinator.first？
		//检查最近的祖先/前一个元素
		function（elem，context，xml）{
			while（（elem = elem [dir]））{
				if（elem.nodeType === 1 || checkNonElements）{
					return matcher（elem，context，xml）;
				}
			}
			返回false;
		}：

		//检查所有祖先/前面的元素
		function（elem，context，xml）{
			var oldCache，uniqueCache，outerCache，
				newCache = [dirruns，doneName];

			//我们无法在XML节点上设置任意数据，因此它们无法从组合缓存中受益
			if（xml）{
				while（（elem = elem [dir]））{
					if（elem.nodeType === 1 || checkNonElements）{
						if（matcher（elem，context，xml））{
							返回true;
						}
					}
				}
			} else {
				while（（elem = elem [dir]））{
					if（elem.nodeType === 1 || checkNonElements）{
						outerCache = elem [expando] || （elem [expando] = {}）;

						//支持：IE <9
						//抵御克隆的attroperties（jQuery gh-1709）
						uniqueCache = outerCache [elem.uniqueID] || （outerCache [elem.uniqueID] = {}）;

						if（skip && skip === elem.nodeName.toLowerCase（））{
							elem = elem [dir] || ELEM;
						} else if（（oldCache = uniqueCache [key]）&&
							oldCache [0] === dirruns && oldCache [1] === doneName）{

							//分配给newCache，以便结果反向传播到以前的元素
							return（newCache [2] = oldCache [2]）;
						} else {
							//重用newcache，使结果反向传播到前面的元素
							uniqueCache [key] = newCache;

							//一场比赛意味着我们已经完成了; 失败意味着我们必须继续检查
							if（（newCache [2] = matcher（elem，context，xml）））{
								返回true;
							}
						}
					}
				}
			}
			返回false;
		};
}

function elementMatcher（matchers）{
	return matchers.length> 1？
		function（elem，context，xml）{
			var i = matchers.length;
			当我 -  ） {
				if（！matchers [i]（elem，context，xml））{
					返回false;
				}
			}
			返回true;
		}：
		匹配器[0];
}

function multipleContexts（selector，contexts，results）{
	var i = 0，
		len = contexts.length;
	for（; i <len; i ++）{
		Sizzle（选择器，contexts [i]，结果）;
	}
	返回结果;
}

function condense（unmatched，map，filter，context，xml）{
	var elem，
		newUnmatched = []，
		i = 0，
		len = unmatched.length，
		mapped = map！= null;

	for（; i <len; i ++）{
		if（（elem = unmatched [i]））{
			if（！filter || filter（elem，context，xml））{
				newUnmatched.push（elem）;
				if（mapped）{
					map.push（i）;
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher（preFilter，selector，matcher，postFilter，postFinder，postSelector）{
	if（postFilter &&！postFilter [expando]）{
		postFilter = setMatcher（postFilter）;
	}
	if（postFinder &&！postFinder [expando]）{
		postFinder = setMatcher（postFinder，postSelector）;
	}
	return markFunction（function（seed，results，context，xml）{
		var temp，i，elem，
			preMap = []，
			postMap = []，
			preexisting = results.length，

			//从种子或上下文中获取初始元素
			elems =种子|| multipleContexts（selector ||“*”，context.nodeType？[context]：context，[]），

			// Prefilter获取匹配器输入，保留种子结果同步的映射
			matcherIn = preFilter &&（seed ||！selector）？
				压缩（elems，preMap，preFilter，context，xml）：
				elems的，

			matcherOut = matcher？
				//如果我们有postFinder，或过滤的种子，或非种子postFilter或预先存在的结果，
				postFinder || （种子？preFilter：preexisting || postFilter）？

					// ...中间处理是必要的
					[]：

					// ...否则直接使用结果
					结果：
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							//恢复matcherIn因为elem还不是最终匹配
							temp.push（（matcherIn [i] = elem））;
						}
					}
					postFinder（null，（matcherOut = []），temp，xml）;
				}

				//将匹配的元素从种子移动到结果以使它们保持同步
				i = matcherOut.length;
				当我 -  ） {
					if（（elem = matcherOut [i]）&&
						（temp = postFinder？indexOf（seed，elem）：preMap [i]）> -1）{

						seed [temp] =！（results [temp] = elem）;
					}
				}
			}

		//如果已定义，则通过postFinder向结果中添加元素
		} else {
			matcherOut =浓缩（
				matcherOut ===结果？
					matcherOut.splice（preexisting，matcherOut.length）：
					matcherOut
			）;
			if（postFinder）{
				postFinder（null，results，matcherOut，xml）;
			} else {
				push.apply（results，matcherOut）;
			}
		}
	}）;
}

function matcherFromTokens（tokens）{
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					我<j && matcherFromTokens（tokens.slice（i，j）），
					j <len && matcherFromTokens（（tokens = tokens.slice（j））），
					j <len && toSelector（令牌）
				）;
			}
			matchers.push（matcher）;
		}
	}

	return elementMatcher（matchers）;
}

function matcherFromGroupMatchers（elementMatchers，setMatchers）{
	var bySet = setMatchers.length> 0，
		byElement = elementMatchers.length> 0，
		superMatcher = function（seed，context，xml，results，outermost）{
			var elem，j，matcher，
				matchedCount = 0，
				i =“0”，
				unmatched = seed && []，
				setMatched = []，
				contextBackup = outermostContext，
				//我们必须始终拥有种子元素或最外层的上下文
				elems =种子|| byElement && Expr.find [“TAG”]（“*”，最外层），
				//使用整数dirruns iff这是最外层的匹配器
				dirrunsUnique =（dirruns + = contextBackup == null？1：Math.random（）|| 0.1），
				len = elems.length;

			if（outermost）{
				outermostContext = context === document || 上下文|| 最外层;
			}

			//添加将elementMatchers直接传递给结果的元素
			//支持：IE <9，Safari
			//通过id容忍NodeList属性（IE：“length”; Safari：<number>）匹配元素
			for（; i！== len &&（elem = elems [i]）！= null; i ++）{
				if（byElement && elem）{
					j = 0;
					if（！context && elem.ownerDocument！== document）{
						setDocument（elem）;
						xml =！documentIsHTML;
					}
					while（（matcher = elementMatchers [j ++]））{
						if（matcher（elem，context || document，xml））{
							results.push（elem）;
							打破;
						}
					}
					if（outermost）{
						dirruns = dirrunsUnique;
					}
				}

				//跟踪设置过滤器的不匹配元素
				if（bySet）{
					//他们将经历所有可能的匹配
					if（（elem =！matcher && elem））{
						matchedCount--;
					}

					//为每个元素延长数组，匹配与否
					if（seed）{
						unmatched.push（elem）;
					}
				}
			}

			//`i`现在是上面访问过的元素的数量，并将它添加到`matchedCount`
			//使后者为非负数。
			matchedCount + = i;

			//将集合过滤器应用于不匹配的元素
			//注意：如果没有不匹配的元素（即`matchedCount`），可以跳过这个
			//等于`i`），除非我们没有访问上面循环中的_any_元素，因为我们有
			//没有元素匹配，没有种子。
			//增加一个初始字符串“0”`i`允许`i`只保留一个字符串
			// case，这将导致“00”`matchedCount`与`i`不同，但也是
			//数字为零
			if（bySet && i！== matchedCount）{
				j = 0;
				while（（matcher = setMatchers [j ++]））{
					matcher（不匹配，setMatched，context，xml）;
				}

				if（seed）{
					//重新整合元素匹配以消除排序的需要
					if（matchedCount> 0）{
						当我 -  ） {
							if（！（unmatched [i] || setMatched [i]））{
								setMatched [i] = pop.call（results）;
							}
						}
					}

					//丢弃索引占位符值以仅获取实际匹配
					setMatched = condense（setMatched）;
				}

				//为结果添加匹配项
				push.apply（results，setMatched）;

				//无核集匹配成功匹配多个成功的匹配器规定排序
				if（outermost &&！seed && setMatched.length> 0 &&
					（matchedCount + setMatchers.length）> 1）{

					Sizzle.uniqueSort（结果）;
				}
			}

			//通过嵌套匹配器覆盖全局变量的操作
			if（outermost）{
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			回归无与伦比;
		};

	返回bySet？
		markFunction（superMatcher）：
		superMatcher;
}

compile = Sizzle.compile = function（选择器，匹配/ *仅供内部使用* /）{
	var i，
		setMatchers = []，
		elementMatchers = []，
		cached = compilerCache [selector +“”];

	if（！cached）{
		//生成递归函数的函数，可用于检查每个元素
		if（！match）{
			match = tokenize（selector）;
		}
		i = match.length;
		当我 -  ） {
			cached = matcherFromTokens（match [i]）;
			if（cached [expando]）{
				setMatchers.push（cached）;
			} else {
				elementMatchers.push（cached）;
			}
		}

		//缓存已编译的函数
		cached = compilerCache（selector，matcherFromGroupMatchers（elementMatchers，setMatchers））;

		//保存选择器和标记化
		cached.selector = selector;
	}
	返回缓存;
};

/ **
 *低级选择功能，适用于Sizzle的编译
 *选择器功能
 * @param {String | Function}选择器选择器或预编译器
 *使用Sizzle.compile构建的选择器功能
 * @param {Element}上下文
 * @param {数组} [结果]
 * @param {Array} [seed]要匹配的一组元素
 * /
select = Sizzle.select = function（选择器，上下文，结果，种子）{
	var i，tokens，token，type，find，
		compiled = typeof selector ===“function”&& selector，
		match =！seed && tokenize（（selector = compiled.selector || selector））;

	结果=结果|| [];

	//如果列表中只有一个选择器且没有种子，请尝试最小化操作
	//（后者保证我们的背景）
	if（match.length === 1）{

		//如果前导复合选择器是ID，则减少上下文
		tokens = match [0] = match [0] .slice（0）;
		if（tokens.length> 2 &&（token = tokens [0]）。type ===“ID”&&
				context.nodeType === 9 && documentIsHTML && Expr.relative [tokens [1] .type]）{

			context =（Expr.find [“ID”]（token.matches [0] .replace（runescape，funescape），context）|| []）[0];
			if（！context）{
				返回结果;

			//预编译的匹配器仍将验证祖先，因此升级一个级别
			} else if（compiled）{
				context = context.parentNode;
			}

			selector = selector.slice（tokens.shift（）。value.length）;
		}

		//获取从右到左匹配的种子集
		i = matchExpr [“needsContext”]。test（selector）？0：tokens.length;
		当我 -  ） {
			token = tokens [i];

			//如果我们击中组合器就中止
			if（Expr.relative [（type = token.type）]）{
				打破;
			}
			if（（find = Expr.find [type]））{
				//搜索，扩展主要兄弟组合子的上下文
				if（（seed = find（
					token.matches [0] .replace（runescape，funescape），
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector（tokens）;
					if（！selector）{
						push.apply（结果，种子）;
						返回结果;
					}

					打破;
				}
			}
		}
	}

	//如果未提供过滤功能，请编译并执行过滤功能
	//如果我们修改了上面的选择器，请提供`match`以避免重新识别
	（编译|| compile（选择器，匹配））（
		种子，
		背景下，
		！documentIsHTML，
		结果，
		！context || rsibling.test（selector）&& testContext（context.parentNode）|| 上下文
	）;
	返回结果;
};

//一次性作业

//排序稳定性
support.sortStable = expando.split（“”）。sort（sortOrder）.join（“”）=== expando;

//支持：Chrome 14-35 +
//如果没有传递给比较函数，则始终假设重复
support.detectDuplicates = !! hasDuplicate;

//针对默认文档初始化
setDocument（）;

//支持：Webkit <537.32  -  Safari 6.0.3 / Chrome 25（在Chrome 27中修复）
//分离的节点混淆地跟随*彼此*
support.sortDetached = assert（function（el）{
	//应返回1，但返回4（以下）
	return el.compareDocumentPosition（document.createElement（“fieldset”））＆1;
}）;

//支持：IE <8
//防止属性/属性“插值”
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if（！assert（function（el）{
	el.innerHTML =“<a href='#'> </a>”;
	return el.firstChild.getAttribute（“href”）===“＃”;
}））{
	addHandle（“type | href | height | width”，function（elem，name，isXML）{
		if（！isXML）{
			return elem.getAttribute（name，name.toLowerCase（）===“type”？1：2）;
		}
	}）;
}

//支持：IE <9
//使用defaultValue代替getAttribute（“value”）
if（！support.attributes ||！assert（function（el）{
	el.innerHTML =“<input />”;
	el.firstChild.setAttribute（“value”，“”）;
	return el.firstChild.getAttribute（“value”）===“”;
}））{
	addHandle（“value”，function（elem，name，isXML）{
		if（！isXML && elem.nodeName.toLowerCase（）===“input”）{
			return elem.defaultValue;
		}
	}）;
}

//支持：IE <9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while（（elem = elem [dir]）&& elem.nodeType！== 9）{
		if（elem.nodeType === 1）{
			if（truncate && jQuery（elem）.is（until））{
				打破;
			}
			matched.push（elem）;
		}
	}
	返回匹配;
};


var siblings = function（n，elem）{
	var matched = [];

	for（; n; n = n.nextSibling）{
		if（n.nodeType === 1 && n！== elem）{
			matched.push（n）;
		}
	}

	返回匹配;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName（elem，name）{

  return elem.nodeName && elem.nodeName.toLowerCase（）=== name.toLowerCase（）;

};
var rsingleTag =（/ ^ <（[az] [^ \ / \ 0>：\ x20 \ t \ r \ n \ f] *）[\ x20 \ t \ r \ n \ f] * \ /？>（ ？：<\ / \ 1> |）$ / i）;



//为过滤器实现相同的功能而不是
function winnow（elements，qualifier，not）{
	if（isFunction（qualifier））{
		return jQuery.grep（elements，function（elem，i）{
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	//元素的Arraylike（jQuery，arguments，Array）
	if（typeof qualifier！==“string”）{
		return jQuery.grep（elements，function（elem）{
			return（indexOf.call（qualifier，elem）> -1）！== not;
		}）;
	}

	//直接过滤简单和复杂的选择器
	return jQuery.filter（限定符，元素，不是）;
}

jQuery.filter = function（expr，elems，not）{
	var elem = elems [0];

	如果不 ） {
		expr =“：not（”+ expr +“）”;
	}

	if（elems.length === 1 && elem.nodeType === 1）{
		返回jQuery.find.matchesSelector（elem，expr）？[elem]：[];
	}

	return jQuery.find.matches（expr，jQuery.grep（elems，function（elem）{
		return elem.nodeType === 1;
	}）;;
};

jQuery.fn.extend（{
	find：function（selector）{
		var i，ret，
			len = this.length，
			self = this;

		if（typeof selector！==“string”）{
			return this.pushStack（jQuery（selector）.filter（function（）{
				for（i = 0; i <len; i ++）{
					if（jQuery.contains（self [i]，this））{
						返回true;
					}
				}
			}）;;
		}

		ret = this.pushStack（[]）;

		for（i = 0; i <len; i ++）{
			jQuery.find（selector，self [i]，ret）;
		}

		返回len> 1？jQuery.uniqueSort（ret）：ret;
	}，
	filter：function（selector）{
		return this.pushStack（winnow（this，selector || []，false））;
	}，
	not：function（selector）{
		return this.pushStack（winnow（this，selector || []，true））;
	}，
	是：function（selector）{
		返回!! winnow（
			这个，

			//如果这是位置/相对选择器，请检查返回集合中的成员资格
			// so $（“p：first”）。is（“p：last”）对于带有两个“p”的doc不会返回true。
			typeof selector ===“string”&& rneedsContext.test（selector）？
				jQuery（选择器）：
				选择器|| []，
			假
		）。长度;
	}
}）;


//初始化一个jQuery对象


//对根jQuery（文档）的中心引用
var rootjQuery，

	//检查HTML字符串的简单方法
	//优先#id <tag>以避免XSS通过location.hash（＃9521）
	//严格的HTML识别（＃11290：必须以<开头）
	//快捷简单#id案例的速度
	rquickExpr = / ^（？：\ s *（<[\ w \ W] +>）[^>] * |＃（[\ w  - ] +））$ /，

	init = jQuery.fn.init = function（selector，context，root）{
		var match，elem;

		// HANDLE：$（“”），$（null），$（undefined），$（false）
		if（！selector）{
			归还这个;
		}

		//方法init（）接受备用的rootjQuery
		//所以迁移可以支持jQuery.sub（gh-2101）
		root = root || rootjQuery;

		//处理HTML字符串
		if（typeof selector ===“string”）{
			if（selector [0] ===“<”&&
				selector [selector.length  -  1] ===“>”&&
				selector.length> = 3）{

				//假设以<>开头和结尾的字符串是HTML并跳过正则表达式检查
				match = [null，selector，null];

			} else {
				match = rquickExpr.exec（selector）;
			}

			//匹配html或确保没有为#id指定上下文
			if（match &&（match [1] ||！context））{

				// HANDLE：$（html） - > $（数组）
				if（match [1]）{
					context =上下文实例jQuery？context [0]：context;

					//对于back-compat，运行脚本的选项是正确的
					//如果parseHTML不存在，请故意抛出错误
					jQuery.merge（this，jQuery.parseHTML（
						匹配[1]，
						context && context.nodeType？context.ownerDocument || 上下文：文件，
						真正
					））;

					// HANDLE：$（html，props）
					if（rsingleTag.test（match [1]）&& jQuery.isPlainObject（context））{
						for（在上下文中匹配）{

							//如果可能，将上下文的属性称为方法
							if（isFunction（this [match]））{
								这[匹配]（context [match]）;

							// ...以及以其他方式设置为属性
							} else {
								this.attr（match，context [match]）;
							}
						}
					}

					归还这个;

				// HANDLE：$（＃id）
				} else {
					elem = document.getElementById（match [2]）;

					if（elem）{

						//将元素直接注入jQuery对象
						这[0] = elem;
						this.length = 1;
					}
					归还这个;
				}

			// HANDLE：$（expr，$（...））
			} else if（！context || context.jquery）{
				return（context || root）.find（selector）;

			// HANDLE：$（expr，context）
			//（这相当于：$（context）.find（expr）
			} else {
				return this.constructor（context）.find（selector）;
			}

		//手柄：$（DOMElement）
		} else if（selector.nodeType）{
			这[0] =选择器;
			this.length = 1;
			归还这个;

		//手柄：$（功能）
		//文档就绪的快捷方式
		} else if（isFunction（selector））{
			return root.ready！== undefined？
				root.ready（selector）：

				//如果没有准备就立即执行
				selector（jQuery）;
		}

		return jQuery.makeArray（selector，this）;
	};

//为init函数提供jQuery原型以供以后实例化
init.prototype = jQuery.fn;

//初始化中心参考
rootjQuery = jQuery（document）;


var rparentsprev = / ^（?: parents | prev（？：Until | All））/，

	//保证在从唯一集开始时生成唯一集的方法
	guaranteeUnique = {
		孩子们：是的，
		内容：true，
		下一个：是的，
		上一篇：真的
	};

jQuery.fn.extend（{
	has：function（target）{
		var targets = jQuery（target，this），
			l = targets.length;

		return this.filter（function（）{
			var i = 0;
			for（; i <l; i ++）{
				if（jQuery.contains（this，targets [i]））{
					返回true;
				}
			}
		}）;
	}，

	最近的：函数（选择器，上下文）{
		var cur，
			i = 0，
			l = this.length，
			匹配= []，
			targets = typeof selectors！==“string”&& jQuery（selectors）;

		//位置选择器永远不会匹配，因为没有_selection_上下文
		if（！rneedsContext.test（selectors））{
			for（; i <l; i ++）{
				for（cur = this [i]; cur && cur！== context; cur = cur.parentNode）{

					//始终跳过文档片段
					if（cur.nodeType <11 &&（目标？
						targets.index（cur）> -1：

						//不要将非元素传递给Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector（cur，selectors）））{

						matched.push（cur）;
						打破;
					}
				}
			}
		}

		return this.pushStack（matched.length> 1？jQuery.uniqueSort（matched）：matched）;
	}，

	//确定集合中元素的位置
	index：function（elem）{

		//没有参数，在父级中返回索引
		if（！elem）{
			return（this [0] && this [0] .parentNode）？this.first（）。prevAll（）。length：-1;
		}

		//选择器中的索引
		if（typeof elem ===“string”）{
			return indexOf.call（jQuery（elem），this [0]）;
		}

		//找到所需元素的位置
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	下一个：function（elem）{
		返回兄弟（elem，“nextSibling”）;
	}，
	上一篇：function（elem）{
		返回兄弟（elem，“previousSibling”）;
	}，
	nextAll：function（elem）{
		return dir（elem，“nextSibling”）;
	}，
	prevAll：function（elem）{
		return dir（elem，“previousSibling”）;
	}，
	nextUntil：function（elem，i，until）{
		return dir（elem，“nextSibling”，直到）;
	}，
	prevUntil：function（elem，i，until）{
		return dir（elem，“previousSibling”，直到）;
	}，
	兄弟姐妹：function（elem）{
		return siblings（（elem.parentNode || {}）。firstirstChild，elem）;
	}，
	children：function（elem）{
		返回兄弟姐妹（elem.firstChild）;
	}，
	内容：function（elem）{
        if（nodeName（elem，“iframe”））{
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *回调列表表现或更传统的选项对象
 *
 *默认情况下，回调列表将像事件回调列表一样，可以
 *多次“解雇”。
 *
 *可能的选择：
 *
 *一次：将确保回调列表只能被触发一次（如延期）
 *
 * memory：将跟踪以前的值并将调用添加的任何回调
 *列表被立即用最新的“记忆”点燃后
 *值（如延期）
 *
 *唯一：将确保回调只能添加一次（列表中没有重复）
 *
 * stopOnFalse：当回调返回false时中断调用
 *
 * /
jQuery.Callbacks = function（options）{

	//如果需要，将选项从String格式转换为Object格式
	//（我们先检查缓存）
	options = typeof options ===“string”？
		createOptions（options）：
		jQuery.extend（{}，options）;

	var //标记列表当前是否正在触发的标志
		射击，

		//不可忘记列表的上次触发值
		记忆，

		//标记是否已触发列表
		解雇，

		//防止射击的旗帜
		锁定，

		//实际回调列表
		list = []，

		//可重复列表的执行数据队列
		queue = []，

		//当前触发回调的索引（根据需要通过添加/删除修改）
		firingIndex = -1，

		//消防回调
		fire = function（）{

			//强制单次射击
			已锁定=已锁定|| options.once;

			//为所有挂起的执行执行回调，
			//尊重firingIndex覆盖和运行时更改
			fired = firing = true;
			for（; queue.length; firingIndex = -1）{
				memory = queue.shift（）;
				while（++ firingIndex <list.length）{

					//运行回调并检查提前终止
					if（list [firingIndex] .apply（memory [0]，memory [1]）=== false &&
						options.stopOnFalse）{

						//跳转到结束并忘记数据，以便.add不会重新启动
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			//如果我们完成了数据，请忘记数据
			if（！options.memory）{
				memory = false;
			}

			fired = false;

			//如果我们完成了射击，那就清理干净吧
			if（locked）{

				//如果我们有未来添加呼叫的数据，请保留一个空列表
				if（memory）{
					list = [];

				//否则，此对象已用完
				} else {
					list =“”;
				}
			}
		}，

		//实际回调对象
		self = {

			//将回调或回调集合添加到列表中
			add：function（）{
				if（list）{

					//如果我们有过去运行的记忆，我们应该在添加之后开火
					if（memory &&！firing）{
						firingIndex = list.length  -  1;
						queue.push（memory）;
					}

					（function add（args）{
						jQuery.each（args，function（_，arg）{
							if（isFunction（arg））{
								if（！options.unique ||！self.has（arg））{
									list.push（arg）;
								}
							} else if（arg && arg.length && toType（arg）！==“string”）{

								//递归检查
								add（arg）;
							}
						}）;
					}）（参数）;

					if（memory &&！firing）{
						火（）;
					}
				}
				归还这个;
			}，

			//从列表中删除回调
			remove：function（）{
				jQuery.each（arguments，function（_，arg）{
					var index;
					while（（index = jQuery.inArray（arg，list，index））> -1）{
						list.splice（index，1）;

						//处理触发索引
						if（index <= firingIndex）{
							firingIndex--;
						}
					}
				}）;
				归还这个;
			}，

			//检查给定的回调是否在列表中。
			//如果没有给出参数，则返回list是否附加了回调。
			has：function（fn）{
				返回fn？
					jQuery.inArray（fn，list）> -1：
					list.length> 0;
			}，

			//从列表中删除所有回调
			empty：function（）{
				if（list）{
					list = [];
				}
				归还这个;
			}，

			//禁用.fire和.add
			//中止所有当前/待处理的执行
			//清除所有回调和值
			disable：function（）{
				locked = queue = [];
				list = memory =“”;
				归还这个;
			}，
			disabled：function（）{
				return！list;
			}，

			//禁用.fire
			//除非我们有内存（因为它没有效果），也禁用.add
			//中止所有待处理的执行
			lock：function（）{
				locked = queue = [];
				if（！memory &&！firing）{
					list = memory =“”;
				}
				归还这个;
			}，
			已锁定：function（）{
				返回!!锁定;
			}，

			//使用给定的上下文和参数调用所有回调
			fireWith：function（context，args）{
				if（！locked）{
					args = args || [];
					args = [context，args.slice？args.slice（）：args];
					queue.push（args）;
					if（！firing）{
						火（）;
					}
				}
				归还这个;
			}，

			//使用给定的参数调用所有回调
			fire：function（）{
				self.fireWith（this，arguments）;
				归还这个;
			}，

			//知道回调函数是否至少被调用过一次
			fired：function（）{
				回来!!被解雇
			}
		};

	回归自我;
};


function Identity（v）{
	返回v;
}
function Thrower（ex）{
	抛出前
}

function adoptValue（value，resolve，reject，noValue）{
	var方法;

	尝试{

		//首先检查promise方面以授予同步行为特权
		if（value && isFunction（（method = value.promise）））{
			method.call（value）.done（resolve）.fail（reject）;

		//其他的人
		} else if（value && isFunction（（method = value.then）））{
			method.call（value，resolve，reject）;

		//其他非卑鄙的人
		} else {

			//通过让Array＃slice将boolean`noValue`转换为整数来控制`resolve`参数：
			// * false：[value] .slice（0）=> resolve（value）
			// * true：[value] .slice（1）=> resolve（）
			resolve.apply（undefined，[value] .slice（noValue））;
		}

	//对于Promises / A +，将异常转换为拒绝
	//由于jQuery.when没有解包，我们可以跳过出现的额外检查
	//延迟＃然后有条件地抑制拒绝。
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				//动作，添加监听器，回调，
				// ...然后处理程序，参数索引，[最终状态]
				[“notify”，“progress”，jQuery.Callbacks（“memory”），
					jQuery.Callbacks（“memory”），2]，
				[“resolve”，“done”，jQuery.Callbacks（“曾经的记忆”），
					jQuery.Callbacks（“一次内存”），0，“已解决”]，
				[“拒绝”，“失败”，jQuery.Callbacks（“曾经记忆”），
					jQuery.Callbacks（“一次记忆”），1，“拒绝”]
			]
			state =“pending”，
			promise = {
				state：function（）{
					返回状态;
				}，
				always：function（）{
					deferred.done（arguments）.fail（arguments）;
					归还这个;
				}，
				“catch”：function（fn）{
					return promise.then（null，fn）;
				}，

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred [tuple [1]]（function（）{
								var returns = fn && fn.apply（this，arguments）;
								if（返回&& isFunction（returned.promise））{
									returned.promise（）
										.progress（newDefer.notify）
										.done（newDefer.resolve）
										.fail（newDefer.reject）;
								} else {
									newDefer [tuple [0] +“With”]（
										这个，
										fn？[返回]：争论
									）;
								}
							}）;
						}）;
						fns = null;
					} ）。诺言（）;
				}，
				then：function（onFulfilled，onRejected，onProgress）{
					var maxDepth = 0;
					function resolve（depth，deferred，handler，special）{
						return function（）{
							var that = this，
								args =参数，
								mightThrow = function（）{
									var返回，然后;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										//只检查对象和函数的可用性
										（typeof返回===“对象”||
											typeof返回===“函数”）&&
										returned.then;

									//处理一个返回的
									if（isFunction（then））{

										//特殊处理器（通知）只是等待解决
										if（special）{
											then.call（
												回，
												解决（maxDepth，deferred，Identity，special），
												解决（maxDepth，deferred，Thrower，special）
											）;

										//正常处理器（解析）也进入了进程
										} else {

											// ...并忽略旧的分辨率值
											MAXDEPTH ++;

											then.call（
												回，
												解决（maxDepth，deferred，Identity，special），
												解决（maxDepth，deferred，Thrower，special），
												解决（maxDepth，deferred，Identity，
													deferred.notifyWith）
											）;
										}

									//处理所有其他返回值
									} else {

										//只有替换处理程序才能传递上下文
										//和多个值（非规范行为）
										if（handler！== Identity）{
											那=未定义;
											args = [返回];
										}

										//处理价值
										//默认进程已解决
										（special || deferred.resolveWith）（that，args）;
									}
								}，

								//只有普通处理器（解析）捕获并拒绝异常
								过程=特殊？
									mayThrow：
									function（）{
										尝试{
											mightThrow（）;
										} catch（e）{

											if（jQuery.Deferred.exceptionHook）{
												jQuery.Deferred.exceptionHook（e，
													process.stackTrace）;
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								//因为当执行异步时它会丢失
								if（jQuery.Deferred.getStackHook）{
									process.stackTrace = jQuery.Deferred.getStackHook（）;
								}
								window.setTimeout（process）;
							}
						};
					}

					return jQuery.Deferred（function（newDefer）{

						// progress_handlers.add（...）
						元组[0] [3] .add（
							解决（
								0，
								newDefer，
								isFunction（onProgress）？
									onProgress：
									身份，
								newDefer.notifyWith
							）
						）;

						// fulfillilled_handlers.add（...）
						元组[1] [3] .add（
							解决（
								0，
								newDefer，
								isFunction（onFulfilled）？
									onFulfilled：
									身分
							）
						）;

						// rejected_handlers.add（...）
						元组[2] [3] .add（
							解决（
								0，
								newDefer，
								isFunction（onRejected）？
									onRejected：
									运动员
							）
						）;
					} ）。诺言（）;
				}，

				//获得延期的承诺
				//如果提供了obj，则将promise方面添加到对象中
				promise：function（obj）{
					return obj！= null？jQuery.extend（obj，promise）：promise;
				}
			}，
			deferred = {};

		//添加特定于列表的方法
		jQuery.each（元组，函数（i，tuple）{
			var list = tuple [2]，
				stateString = tuple [5];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise [tuple [1]] = list.add;

			//处理状态
			if（stateString）{
				list.add（
					function（）{

						// state =“已解决”（即已履行）
						// state =“rejected”
						state = stateString;
					}，

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					元组[3  -  i] [2] .disable，

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					元组[3  -  i] [3] .disable，

					// progress_callbacks.lock
					元组[0] [2] .lock，

					// progress_handlers.lock
					元组[0] [3] .lock
				）;
			}

			// progress_handlers.fire
			// fulfillilled_handlers.fire
			// rejected_handlers.fire
			list.add（元组[3] .fire）;

			// deferred.notify = function（）{deferred.notifyWith（...）}
			// deferred.resolve = function（）{deferred.resolveWith（...）}
			// deferred.reject = function（）{deferred.rejectWith（...）}
			deferred [tuple [0]] = function（）{
				deferred [tuple [0] +“With”]（这= = deferred？undefined：this，arguments）;
				归还这个;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred [tuple [0] +“With”] = list.fireWith;
		}）;

		//使延期承诺
		promise.promise（延期）;

		//如果有的话，调用给定的func
		if（func）{
			func.call（延迟，延期）;
		}

		// 全部完成！
		退货延期;
	}，

	//延期帮助者
	when：function（singleValue）{
		VAR

			//未完成的下属的数量
			remaining = arguments.length，

			//未处理参数的数量
			我=剩下的，

			//从属履行数据
			resolveContexts = Array（i），
			resolveValues = slice.call（arguments），

			//主人延期
			master = jQuery.Deferred（），

			//下属回调工厂
			updateFunc = function（i）{
				return函数（值）{
					resolveContexts [i] = this;
					resolveValues [i] = arguments.length> 1？slice.call（arguments）：value;
					if（！（--remaining））{
						master.resolveWith（resolveContexts，resolveValues）;
					}
				};
			};

		//采用单参数和空参数，如Promise.resolve
		if（剩余<= 1）{
			adoptValue（singleValue，master.done（updateFunc（i））。。resolve，master.reject，
				！剩下的）;

			//使用.then（）打开辅助设备（参见gh-3000）
			if（master.state（）===“pending”||
				isFunction（resolveValues [i] && resolveValues [i] .then））{

				return master.then（）;
			}
		}

		//像Promise.all数组元素一样聚合多个参数
		当我 -  ） {
			adoptValue（resolveValues [i]，updateFunc（i），master.reject）;
		}

		return master.promise（）;
	}
}）;


//这些通常表示程序员在开发过程中出错，
//尽快警告他们，而不是默认吞下他们。
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch（function（error）{
			jQuery.readyException（error）;
		}）;

	归还这个;
};

jQuery.extend（{

	// DOM是否可以使用？一旦发生，设置为true。
	isReady：false，

	//一个计数器，用于跟踪之前要等待的项目数
	//就绪事件触发 见＃6781
	readyWait：1，

	// DOM准备就绪时处理
	ready：function（wait）{

		//如果有待处理的暂停中止或我们已经准备就绪中止
		if（wait === true？--jQuery.readyWait：jQuery.isReady）{
			返回;
		}

		//记住DOM准备好了
		jQuery.isReady = true;

		//如果正常的DOM Ready事件被触发，减少，并在需要时等待
		if（等等！== true && --jQuery.readyWait> 0）{
			返回;
		}

		//如果有绑定的函数，则执行
		readyList.resolveWith（document，[jQuery]）;
	}
}）;

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener（“load”，completed）;
}




//获取和设置集合值的多功能方法
//如果值是函数，则可以选择执行值/ s
var access = function（elems，fn，key，value，chainable，emptyGet，raw）{
	var i = 0，
		len = elems.length，
		bulk = key == null;

	//设置许多值
	if（toType（key）===“object”）{
		chainable = true;
		for（i in key）{
			访问（elems，fn，i，key [i]，true，emptyGet，raw）;
		}

	//设置一个值
	} else if（value！== undefined）{
		chainable = true;

		if（！isFunction（value））{
			raw = true;
		}

		if（bulk）{

			//批量操作针对整个集合运行
			if（raw）{
				fn.call（elems，value）;
				fn = null;

			// ...执行函数值时除外
			} else {
				bulk = fn;
				fn = function（elem，key，value）{
					return bulk.call（jQuery（elem），value）;
				};
			}
		}

		if（fn）{
			for（; i <len; i ++）{
				FN（
					elems [i]，关键，原始？
					价值：
					value.call（elems [i]，i，fn（elems [i]，key））
				）;
			}
		}
	}

	if（chainable）{
		返回元素;
	}

	//获取
	if（bulk）{
		return fn.call（elems）;
	}

	返回len？fn（elems [0]，key）：emptyGet;
};


//匹配破折号的字符串
var rmsPrefix = / ^  -  ms- /，
	rdashAlpha = /  - （[az]）/ g;

//由camelCase用作replace（）的回调
function fcamelCase（all，letter）{
	return letter.toUpperCase（）;
}

//将虚线转换为camelCase; 由css和数据模块使用
//支持：IE <= 9  -  11，边缘12  -  15
//微软忘了驼背他们的供应商前缀（＃9572）
function camelCase（string）{
	return string.replace（rmsPrefix，“ms-”）.replace（rdashAlpha，fcamelCase）;
}
var acceptData = function（owner）{

	//仅接受：
	//  - 节点
	//  -  Node.ELEMENT_NODE
	//  -  Node.DOCUMENT_NODE
	//  - 对象
	// - 任何
	return owner.nodeType === 1 || owner.nodeType === 9 || ！（+ owner.nodeType）;
};




function Data（）{
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	cache：function（owner）{

		//检查所有者对象是否已有缓存
		var value = owner [this.expando];

		//如果没有，请创建一个
		if（！value）{
			value = {};

			//我们可以接受现代浏览器中非元素节点的数据，
			//但我们不应该看到＃8335。
			//始终返回一个空对象。
			if（acceptData（owner））{

				//如果它是一个不太可能被字符串化或循环的节点
				//使用普通作业
				if（owner.nodeType）{
					所有者[this.expando] =价值;

				//否则将其保存在非可枚举的属性中
				// configurable必须为true才能允许属性
				//删除数据时删除
				} else {
					Object.defineProperty（owner，this.expando，{
						价值：价值，
						可配置：true
					}）;
				}
			}
		}

		回报值;
	}，
	set：function（owner，data，value）{
		var prop，
			cache = this.cache（owner）;

		//句柄：[所有者，密钥，值] args
		//始终使用camelCase键（gh-2257）
		if（typeof data ===“string”）{
			cache [camelCase（data）] = value;

		//句柄：[所有者，{properties}] args
		} else {

			//将属性逐个复制到缓存对象
			for（数据中的道具）{
				cache [camelCase（prop）] = data [prop];
			}
		}
		返回缓存;
	}，
	get：function（owner，key）{
		返回键=== undefined？
			this.cache（所有者）：

			//始终使用camelCase键（gh-2257）
			所有者[this.expando] && owner [this.expando] [camelCase（key）];
	}，
	access：function（owner，key，value）{

		//在以下任何一种情况下：
		//
		// 1.未指定密钥
		// 2.指定了字符串键，但未提供任何值
		//
		//采用“读取”路径并允许get方法确定
		//要返回的值分别为：
		//
		// 1.整个缓存对象
		// 2.存储在密钥中的数据
		//
		if（key === undefined ||
				（（key && typeof key ===“string”）&& value === undefined））{

			return this.get（owner，key）;
		}

		//当键不是字符串，或者键和值都是
		//使用以下任一方式指定，设置或扩展（现有对象）：
		//
		// 1.属性的对象
		// 2.一个关键和价值
		//
		this.set（所有者，密钥，值）;

		//由于“set”路径可以有两个可能的入口点
		//根据采取的路径返回预期数据[*]
		返回值！== undefined？价值：关键;
	}，
	remove：function（owner，key）{
		var i，
			cache = owner [this.expando];

		if（cache === undefined）{
			返回;
		}

		if（key！== undefined）{

			//支持数组或空格分隔的键串
			if（Array.isArray（key））{

				//如果key是一个键数组......
				//我们总是设置camelCase键，所以删除它。
				key = key.map（camelCase）;
			} else {
				key = camelCase（key）;

				//如果存在带空格的键，请使用它。
				//否则，通过匹配非空格来创建数组
				key =缓存中的密钥？
					[关键]：
					（key.match（rnothtmlwhite）|| []）;
			}

			i = key.length;

			当我 -  ） {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
// 2.通过减少存储来提高模块的可维护性
//单个机制的路径。
// 3.使用相同的单一机制来支持“私有”和“用户”数据。
// 4. _Never_将“私有”数据暴露给用户代码（TODO：Drop _data，_removeData）
// 5.避免在用户对象上公开实现细节（例如，expando属性）
// 6.为2014年的WeakMap实施升级提供明确的途径

var rbrace = / ^（？：\ {[\ w \ W] * \} | \ [[\ w \ W] * \]）$ /，
	rmultiDash = / [AZ] / g;

function getData（data）{
	if（data ===“true”）{
		返回true;
	}

	if（data ===“false”）{
		返回false;
	}

	if（data ===“null”）{
		return null;
	}

	//如果不更改字符串，则仅转换为数字
	if（data === + data +“”）{
		返回+数据;
	}

	if（rbrace.test（data））{
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO：现在已经替换了对_data和_removeData的所有调用
	//直接调用dataPriv方法，可以不推荐使用这些方法。
	_data：function（elem，name，data）{
		return dataPriv.access（elem，name，data）;
	}，

	_removeData：function（elem，name）{
		dataPriv.remove（elem，name）;
	}
}）;

jQuery.fn.extend（{
	data：function（key，value）{
		var i，名称，数据，
			elem = this [0]，
			attrs = elem && elem.attributes;

		//获取所有值
		if（key === undefined）{
			if（this.length）{
				data = dataUser.get（elem）;

				if（elem.nodeType === 1 &&！dataPriv.get（elem，“hasDataAttrs”））{
					i = attrs.length;
					当我 -  ） {

						//支持：仅限IE 11
						// attrs元素可以为null（＃14894）
						if（attrs [i]）{
							name = attrs [i] .name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				//尝试从缓存中获取数据
				//密钥将永远是数据中的camelCased
				data = dataUser.get（elem，key）;
				if（data！== undefined）{
					返回数据;
				}

				//尝试“发现”中的数据
				// HTML5自定义数据 -  * attrs
				data = dataAttr（elem，key）;
				if（data！== undefined）{
					返回数据;
				}

				//我们努力尝试，但数据不存在。
				返回;
			}

			//设置数据......
			this.each（function（）{

				//我们总是存储camelCased密钥
				dataUser.set（this，key，value）;
			}）;
		}，null，value，arguments.length> 1，null，true）;
	}，

	removeData：function（key）{
		return this.each（function（）{
			dataUser.remove（this，key）;
		}）;
	}
}）;


jQuery.extend（{
	queue：function（elem，type，data）{
		var queue;

		if（elem）{
			type =（type ||“fx”）+“queue”;
			queue = dataPriv.get（elem，type）;

			//如果这只是一次查找，可以通过快速退出来加速出队
			if（data）{
				if（！queue || Array.isArray（data））{
					queue = dataPriv.access（elem，type，jQuery.makeArray（data））;
				} else {
					queue.push（data）;
				}
			}
			返回队列|| [];
		}
	}，

	dequeue：function（elem，type）{
		type = type || “FX”;

		var queue = jQuery.queue（elem，type），
			startLength = queue.length，
			fn = queue.shift（），
			hooks = jQuery._queueHooks（elem，type），
			next = function（）{
				jQuery.dequeue（elem，type）;
			};

		//如果fx队列出列，请始终删除进度sentinel
		if（fn ===“inprogress”）{
			fn = queue.shift（）;
			startLength--;
		}

		if（fn）{

			//添加进度sentinel以防止fx队列进入
			//自动出列
			if（type ===“fx”）{
				queue.unshift（“inprogress”）;
			}

			//清除最后一个队列停止功能
			delete hooks.stop;
			fn.call（elem，next，hooks）;
		}

		if（！startLength && hooks）{
			hooks.empty.fire（）;
		}
	}，

	// not public  - 生成queueHooks对象，或返回当前对象
	_queueHooks：function（elem，type）{
		var key = type +“queueHooks”;
		return dataPriv.get（elem，key）|| dataPriv.access（elem，key，{
			empty：jQuery.Callbacks（“once memory”）。add（function（）{
				dataPriv.remove（elem，[type +“queue”，key]）;
			}）
		}）;
	}
}）;

jQuery.fn.extend（{
	queue：function（type，data）{
		var setter = 2;

		if（typeof type！==“string”）{
			data = type;
			type =“fx”;
			setter--;
		}

		if（arguments.length <setter）{
			return jQuery.queue（this [0]，type）;
		}

		返回数据=== undefined？
			这个 ：
			this.each（function（）{
				var queue = jQuery.queue（this，type，data）;

				//确保此队列的挂钩
				jQuery._queueHooks（this，type）;

				if（type ===“fx”&& queue [0]！==“inprogress”）{
					jQuery.dequeue（this，type）;
				}
			}）;
	}，
	dequeue：function（type）{
		return this.each（function（）{
			jQuery.dequeue（this，type）;
		}）;
	}，
	clearQueue：function（type）{
		return this.queue（type ||“fx”，[]）;
	}，

	//获取某个类型的队列时解析的承诺
	//被清空（默认情况下fx是类型）
	promise：function（type，obj）{
		var tmp，
			count = 1，
			defer = jQuery.Deferred（），
			elements = this，
			i = this.length，
			resolve = function（）{
				if（！（ -  count））{
					defer.resolveWith（elements，[elements]）;
				}
			};

		if（typeof type！==“string”）{
			obj = type;
			type = undefined;
		}
		type = type || “FX”;

		当我 -  ） {
			tmp = dataPriv.get（elements [i]，type +“queueHooks”）;
			if（tmp && tmp.empty）{
				计数++;
				tmp.empty.add（resolve）;
			}
		}
		解决（）;
		return defer.promise（obj）;
	}
}）;
var pnum =（/ [+  - ]？（？：[d *。*] \ d +（？：[eE] [+  - ]？\ d+ |）/）。source;

var rcssNum = new RegExp（“^（？:( [+  - ]）= |）（”+ pnum +“）（[az％] *）$”，“i”）;


var cssExpand = [“Top”，“Right”，“Bottom”，“Left”];

var isHiddenWithinTree = function（elem，el）{

		// isHiddenWithinTree可能是从jQuery＃filter函数调用的;
		//在这种情况下，元素将是第二个参数
		elem = el || ELEM;

		//内联样式胜过所有
		return elem.style.display ===“none”||
			elem.style.display ===“”&&

			//否则，检查计算样式
			//支持：Firefox <= 43  -  45
			//断开连接的元素可以计算display：none，所以首先确认elem是
			//在文档中。
			jQuery.contains（elem.ownerDocument，elem）&&

			jQuery.css（elem，“display”）===“none”;
	};

var swap = function（elem，options，callback，args）{
	var ret，name，
		old = {};

	//记住旧值，然后插入新值
	for（选项中的名称）{
		old [name] = elem.style [name];
		elem.style [name] = options [name];
	}

	ret = callback.apply（elem，args || []）;

	//恢复旧值
	for（选项中的名称）{
		elem.style [name] = old [name];
	}

	返回;
};




function adjustCSS（elem，prop，valueParts，tween）{
	var调整，规模，
		maxIterations = 20，
		currentValue =补间？
			function（）{
				return tween.cur（）;
			}：
			function（）{
				return jQuery.css（elem，prop，“”）;
			}，
		initial = currentValue（），
		unit = valueParts && valueParts [3] || （jQuery.cssNumber [prop]？“”：“px”），

		//潜在的单位不匹配需要起始值计算
		initialInUnit =（jQuery.cssNumber [prop] || unit！==“px”&& + initial）&&
			rcssNum.exec（jQuery.css（elem，prop））;

	if（initialInUnit && initialInUnit [3]！== unit）{

		//支持：Firefox <= 54
		//将迭代目标值减半以防止来自CSS上限的干扰（gh-2144）
		initial = initial / 2;

		// jQuery.css报告的信任单位
		unit = unit || initialInUnit [3];

		//从非零起点迭代逼近
		initialInUnit = + initial || 1;

		while（maxIterations--）{

			//评估并更新我们的最佳猜测（加倍猜测为零）。
			//如果比例等于或超过1，则结束（使旧*新产品为非正数）。
			jQuery.style（elem，prop，initialInUnit + unit）;
			if（（1  -  scale）*（1  - （scale = currentValue（）/ initial || 0.5））<= 0）{
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style（elem，prop，initialInUnit + unit）;

		//确保我们稍后更新补间属性
		valueParts = valueParts || [];
	}

	if（valueParts）{
		initialInUnit = + initialInUnit || +初始|| 0;

		//如果指定，则应用相对偏移量（+ = /  -  =）
		adjust = valueParts [1]？
			initialInUnit +（valueParts [1] + 1）* valueParts [2]：
			+ valueParts [2];
		if（tween）{
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end =调整;
		}
	}
	返回调整;
}


var defaultDisplayMap = {};

function getDefaultDisplay（elem）{
	变温，
		doc = elem.ownerDocument，
		nodeName = elem.nodeName，
		display = defaultDisplayMap [nodeName];

	if（display）{
		返回显示;
	}

	temp = doc.body.appendChild（doc.createElement（nodeName））;
	display = jQuery.css（temp，“display”）;

	temp.parentNode.removeChild（temp）;

	if（display ===“none”）{
		display =“block”;
	}
	defaultDisplayMap [nodeName] = display;

	返回显示;
}

function showHide（elements，show）{
	var display，elem，
		values = []，
		index = 0，
		length = elements.length;

	//确定需要更改的元素的新显示值
	for（; index <length; index ++）{
		elem = elements [index];
		if（！elem.style）{
			继续;
		}

		display = elem.style.display;
		if（show）{

			//因为我们强制对级联隐藏元素进行可见性，所以立即（和慢）
			//在第一个循环中需要检查，除非我们有非空的显示值（或者
			//内联或即将恢复）
			if（display ===“none”）{
				values [index] = dataPriv.get（elem，“display”）|| 空值;
				if（！values [index]）{
					elem.style.display =“”;
				}
			}
			if（elem.style.display ===“”&& isHiddenWithinTree（elem））{
				values [index] = getDefaultDisplay（elem）;
			}
		} else {
			if（display！==“none”）{
				values [index] =“none”;

				//记住我们要覆盖的东西
				dataPriv.set（elem，“display”，display）;
			}
		}
	}

	//在第二个循环中设置元素的显示，以避免不断的回流
	for（index = 0; index <length; index ++）{
		if（values [index]！= null）{
			elements [index] .style.display = values [index];
		}
	}

	返回元素;
}

jQuery.fn.extend（{
	show：function（）{
		return showHide（this，true）;
	}，
	hide：function（）{
		return showHide（this）;
	}，
	toggle：function（state）{
		if（typeof state ===“boolean”）{
			返回状态？this.show（）：this.hide（）;
		}

		return this.each（function（）{
			if（isHiddenWithinTree（this））{
				jQuery（this）.show（）;
			} else {
				jQuery（this）.hide（）;
			}
		}）;
	}
}）;
var rcheckableType =（/ ^（？：checkbox | radio）$ / i）;

var rtagName =（/ <（[az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] +）/ i）;

var rscriptType =（/ ^ $ | ^ module $ | \ /（？：java | ecma）script / i）;



//我们必须关闭这些标签才能支持XHTML（＃13200）
var wrapMap = {

	//支持：IE <= 9
	选项：[1，“<select multiple ='multiple'>”，“</ select>”]，

	// XHTML解析器不会神奇地插入元素
	//标记汤解析器的方式相同。所以我们不能缩短
	//通过省略<tbody>或其他必需元素。
	thead：[1，“<table>”，“</ table>”]，
	col：[2，“<table> <colgroup>”，“</ colgroup> </ table>”]，
	tr：[2，“<table> <tbody>”，“</ tbody> </ table>”]，
	td：[3，“<table> <tbody> <tr>”，“</ tr> </ tbody> </ table>”]，

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval（elems，refElements）{
	var i = 0，
		l = elems.length;

	for（; i <l; i ++）{
		dataPriv.set（
			elems [i]，
			“globalEval”
			！refElements || dataPriv.get（refElements [i]，“globalEval”）
		）;
	}
}


var rhtml = / <|＆＃？\ w +; /;

function buildFragment（elems，context，scripts，selection，ignored）{
	var elem，tmp，tag，wrap，contains，j，
		fragment = context.createDocumentFragment（），
		nodes = []，
		i = 0，
		l = elems.length;

	for（; i <l; i ++）{
		elem = elems [i];

		if（elem || elem === 0）{

			//直接添加节点
			if（toType（elem）===“object”）{

				//支持：仅限Android <= 4.0，仅限PhantomJS 1
				// push.apply（_，arraylike）抛出古老的WebKit
				jQuery.merge（nodes，elem.nodeType？[elem]：elem）;

			//将非html转换为文本节点
			} else if（！rhtml.test（elem））{
				nodes.push（context.createTextNode（elem））;

			//将html转换为DOM节点
			} else {
				tmp = tmp || fragment.appendChild（context.createElement（“div”））;

				//反序列化标准表示
				tag =（rtagName.exec（elem）|| [“”，“”]）[1] .toLowerCase（）;
				wrap = wrapMap [tag] || wrapMap._default;
				tmp.innerHTML = wrap [1] + jQuery.htmlPrefilter（elem）+ wrap [2];

				//通过包装器下降到正确的内容
				j = wrap [0];
				while（j--）{
					tmp = tmp.lastChild;
				}

				//支持：仅限Android <= 4.0，仅限PhantomJS 1
				// push.apply（_，arraylike）抛出古老的WebKit
				jQuery.merge（nodes，tmp.childNodes）;

				//记住顶级容器
				tmp = fragment.firstChild;

				//确保创建的节点是孤立的（＃12392）
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment（），
		div = fragment.appendChild（document.createElement（“div”）），
		input = document.createElement（“input”）;

	//支持：仅限Android 4.0  -  4.3
	//如果设置了名称，检查状态是否丢失（＃11217）
	//支持：Windows Web Apps（WWA）
	//`name`和`type`必须使用.setAttribute for WWA（＃14901）
	input.setAttribute（“type”，“radio”）;
	input.setAttribute（“checked”，“checked”）;
	input.setAttribute（“name”，“t”）;

	div.appendChild（输入）;

	//支持：Android <= 4.1
	//较旧的WebKit不会在片段中正确克隆已检查状态
	support.checkClone = div.cloneNode（true）.cloneNode（true）.lastChild.checked;

	//支持：IE <= 11
	//确保正确克隆textarea（和复选框）defaultValue
	div.innerHTML =“<textarea> x </ textarea>”;
	support.noCloneChecked = !! div.cloneNode（true）.lastChild.defaultValue;
}）（）;
var documentElement = document.documentElement;



VAR
	rkeyEvent = / ^ key /，
	rmouseEvent = / ^（？：mouse | pointer | contextmenu | drag | drop）| click /，
	rtypenamespace = /^([^.]*)(?:\。（。+）|）/;

function returnTrue（）{
	返回true;
}

function returnFalse（）{
	返回false;
}

//支持：IE <= 9
//有关详细信息，请参阅＃13393
function safeActiveElement（）{
	尝试{
		return document.activeElement;
	} catch（err）{}
}

函数on（elem，types，selector，data，fn，one）{
	var origFn，type;

	//类型可以是类型/处理程序的映射
	if（typeof types ===“object”）{

		//（类型 - 对象，选择器，数据）
		if（typeof selector！==“string”）{

			//（类型 - 对象，数据）
			data = data || 选择;
			selector = undefined;
		}
		for（type in types）{
			on（elem，type，selector，data，types [type]，one）;
		}
		返回元素;
	}

	if（data == null && fn == null）{

		//（类型，fn）
		fn =选择器;
		data = selector = undefined;
	} else if（fn == null）{
		if（typeof selector ===“string”）{

			//（类型，选择器，fn）
			fn =数据;
			data = undefined;
		} else {

			//（类型，数据，fn）
			fn =数据;
			data = selector;
			selector = undefined;
		}
	}
	if（fn === false）{
		fn = returnFalse;
	} else if（！fn）{
		返回元素;
	}

	if（one === 1）{
		origFn = fn;
		fn = function（event）{

			//可以使用空集，因为事件包含信息
			jQuery（）。off（event）;
			return origFn.apply（this，arguments）;
		};

		//使用相同的guid，以便调用者可以使用origFn删除
		fn.guid = origFn.guid || （origFn.guid = jQuery.guid ++）;
	}
	return elem.each（function（）{
		jQuery.event.add（this，types，fn，data，selector）;
	}）;
}

/ *
 * Helper功能用于管理事件 - 不是公共接口的一部分。
 *为Dean Edwards的addEvent库提供了许多想法的道具。
 * /
jQuery.event = {

	全球：{}，

	add：function（elem，types，handler，data，selector）{

		var handleObjIn，eventHandle，tmp，
			events，t，handleObj，
			特殊，处理程序，类型，命名空间，origType，
			elemData = dataPriv.get（elem）;

		//不要将事件附加到noData或text / comment节点（但允许普通对象）
		if（！elemData）{
			返回;
		}

		//调用者可以传入自定义数据的对象来代替处理程序
		if（handler.handler）{
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		//确保无效选择器在附加时抛出异常
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		//处理由空格分隔的多个事件
		types =（types ||“”）.match（rnothtmlwhite）|| [“”];
		t = types.length;
		while（t--）{
			tmp = rtypenamespace.exec（types [t]）|| [];
			type = origType = tmp [1];
			namespaces =（tmp [2] ||“”）。split（“。”）。sort（）;

			//那里*必须*是一个类型，没有附加名称空间的处理程序
			if（！type）{
				继续;
			}

			//如果事件更改其类型，请使用特殊事件处理程序来更改类型
			special = jQuery.event.special [type] || {};

			//如果定义了选择器，则确定特殊事件api类型，否则给定类型
			type =（selector？special.delegateType：special.bindType）|| 类型;

			//根据新重置类型更新特殊
			special = jQuery.event.special [type] || {};

			// handleObj被传递给所有事件处理程序
			handleObj = jQuery.extend（{
				类型：类型，
				origType：origType，
				数据：数据，
				handler：handler，
				guid：handler.guid，
				选择器：选择器，
				needsContext：selector && jQuery.expr.match.needsContext.test（selector），
				namespace：namespaces.join（“。”）
			}，handleObjIn）;

			//如果我们是第一个，请启动事件处理程序队列
			if（！（handlers = events [type]））{
				handlers = events [type] = [];
				handlers.delegateCount = 0;

				//如果特殊事件处理程序返回false，则仅使用addEventListener
				if（！special.setup ||
					special.setup.call（elem，data，namespaces，eventHandle）=== false）{

					if（elem.addEventListener）{
						elem.addEventListener（type，eventHandle）;
					}
				}
			}

			if（special.add）{
				special.add.call（elem，handleObj）;

				if（！handleObj.handler.guid）{
					handleObj.handler.guid = handler.guid;
				}
			}

			//添加到元素的处理程序列表，在前面委托
			if（selector）{
				handlers.splice（handlers.delegateCount ++，0，handleObj）;
			} else {
				handlers.push（handleObj）;
			}

			//跟踪曾经使用过哪些事件，以进行事件优化
			jQuery.event.global [type] = true;
		}

	}，

	//从元素中分离事件或事件集
	remove：function（elem，types，handler，selector，mappedTypes）{

		var j，origCount，tmp，
			events，t，handleObj，
			特殊，处理程序，类型，命名空间，origType，
			elemData = dataPriv.hasData（elem）&& dataPriv.get（elem）;

		if（！elemData ||！（events = elemData.events））{
			返回;
		}

		//对于类型中的每个type.namespace一次; 类型可以省略
		types =（types ||“”）.match（rnothtmlwhite）|| [“”];
		t = types.length;
		while（t--）{
			tmp = rtypenamespace.exec（types [t]）|| [];
			type = origType = tmp [1];
			namespaces =（tmp [2] ||“”）。split（“。”）。sort（）;

			//取消绑定元素的所有事件（在此命名空间上，如果提供）
			if（！type）{
				for（输入事件）{
					jQuery.event.remove（elem，type + types [t]，handler，selector，true）;
				}
				继续;
			}

			special = jQuery.event.special [type] || {};
			type =（selector？special.delegateType：special.bindType）|| 类型;
			处理程序=事件[类型] || [];
			tmp = tmp [2] &&
				new RegExp（“（^ | \\。）”+ namespaces.join（“\\。（？：。* \\。|）”）+“（\\。| $）”）;

			//删除匹配的事件
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call（elem，namespaces，elemData.handle）=== false）{

					jQuery.removeEvent（elem，type，elemData.handle）;
				}

				删除事件[type];
			}
		}

		//删除数据和expando（如果不再使用它）
		if（jQuery.isEmptyObject（events））{
			dataPriv.remove（elem，“handle events”）;
		}
	}，

	dispatch：function（nativeEvent）{

		//从本机事件对象创建一个可写的jQuery.Event
		var event = jQuery.event.fix（nativeEvent）;

		var i，j，ret，matched，handleObj，handlerQueue，
			args = new Array（arguments.length），
			handlers =（dataPriv.get（this，“events”）|| {}）[event.type] || []，
			special = jQuery.event.special [event.type] || {};

		//使用fix-ed jQuery.Event而不是（只读）本机事件
		args [0] =事件;

		for（i = 1; i <arguments.length; i ++）{
			args [i] =参数[i];
		}

		event.delegateTarget = this;

		//为映射类型调用preDispatch挂钩，如果需要，让它保释
		if（special.preDispatch && special.preDispatch.call（this，event）=== false）{
			返回;
		}

		//确定处理程序
		handlerQueue = jQuery.event.handlers.call（this，event，handlers）;

		//先运行代理; 他们可能想停止在我们身下传播
		i = 0;
		while（（matched = handlerQueue [i ++]）&&！event.isPropagationStopped（））{
			event.currentTarget = matched.elem;

			j = 0;
			while（（handleObj = matched.handlers [j ++]）&&
				！event.isImmediatePropagationStopped（））{

				//触发事件必须1）没有命名空间，或2）有命名空间
				//一个子集或等于绑定事件中的子集（两者都没有命名空间）。
				if（！event.rnamespace || event.rnamespace.test（handleObj.namespace））{

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret =（（jQuery.event.special [handleObj.origType] || {}）。handlele ||
						handleObj.handler）.apply（matched.elem，args）;

					if（ret！== undefined）{
						if（（event.result = ret）=== false）{
							event.preventDefault（）;
							event.stopPropagation（）;
						}
					}
				}
			}
		}

		//为映射类型调用postDispatch挂钩
		if（special.postDispatch）{
			special.postDispatch.call（this，event）;
		}

		return event.result;
	}，

	处理程序：function（event，handlers）{
		var i，handleObj，sel，matchedHandlers，matchedSelectors，
			handlerQueue = []，
			delegateCount = handlers.delegateCount，
			cur = event.target;

		//查找委托处理程序
		if（delegateCount &&

			//支持：IE <= 9
			//黑洞SVG <use>实例树（trac-13180）
			cur.nodeType &&

			//支持：Firefox <= 42
			//抑制指示非主指针按钮的规范违规点击（trac-3861）
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			//支持：仅限IE 11
			// ...但不是箭头键“点击”无线电输入，可以有“按钮”-1（gh-2343）
			！（event.type ===“click”&& event.button> = 1））{

			for（; cur！== this; cur = cur.parentNode || this）{

				//不要检查非元素（＃13208）
				//不要处理已禁用元素的点击次数（＃6911，＃8165，＃11382，＃11764）
				if（cur.nodeType === 1 &&！（event.type ===“click”&& cur.disabled === true））{
					matchedHandlers = [];
					matchedSelectors = {};
					for（i = 0; i <delegateCount; i ++）{
						handleObj = handlers [i];

						//不要与Object.prototype属性冲突（＃13203）
						sel = handleObj.selector +“”;

						if（matchedSelectors [sel] === undefined）{
							matchedSelectors [sel] = handleObj.needsContext？
								jQuery（sel，this）.index（cur）> -1：
								jQuery.find（sel，this，null，[cur]）。length;
						}
						if（matchedSelectors [sel]）{
							matchedHandlers.push（handleObj）;
						}
					}
					if（matchedHandlers.length）{
						handlerQueue.push（{elem：cur，handlers：matchedHandlers}）;
					}
				}
			}
		}

		//添加剩余的（直接绑定的）处理程序
		cur = this;
		if（delegateCount <handlers.length）{
			handlerQueue.push（{elem：cur，handlers：handlers.slice（delegateCount）}）;
		}

		return handlerQueue;
	}，

	addProp：function（name，hook）{
		Object.defineProperty（jQuery.Event.prototype，name，{
			可枚举的：是的，
			可配置：true，

			get：isFunction（hook）？
				function（）{
					if（this.originalEvent）{
							return hook（this.originalEvent）;
					}
				}：
				function（）{
					if（this.originalEvent）{
							return this.originalEvent [name];
					}
				}，

			set：function（value）{
				Object.defineProperty（this，name，{
					可枚举的：是的，
					可配置：true，
					可写的：真的，
					价值：价值
				}）;
			}
		}）;
	}，

	修复：function（originalEvent）{
		return originalEvent [jQuery.expando]？
			originalEvent：
			new jQuery.Event（originalEvent）;
	}，

	特别：{
		load：{

			//阻止触发的image.load事件从冒泡到window.load
			noBubble：是的
		}，
		焦点：{

			//如果可能，请激活原生事件，以使模糊/焦点顺序正确
			trigger：function（）{
				if（this！== safeActiveElement（）&& this.focus）{
					this.focus（）;
					返回false;
				}
			}，
			delegateType：“focusin”
		}，
		模糊：{
			trigger：function（）{
				if（this === safeActiveElement（）&& this.blur）{
					this.blur（）;
					返回false;
				}
			}，
			delegateType：“focusout”
		}，
		点击：{

			//对于复选框，触发本机事件，以便检查状态是正确的
			trigger：function（）{
				if（this.type ===“checkbox”&& this.click && nodeName（this，“input”））{
					this.click（）;
					返回false;
				}
			}，

			//对于跨浏览器的一致性，请不要在链接上触发本机.click（）
			_default：function（event）{
				return nodeName（event.target，“a”）;
			}
		}，

		beforeunload：{
			postDispatch：function（event）{

				//支持：Firefox 20+
				//如果未设置returnValue字段，Firefox不会发出警报。
				if（event.result！== undefined && event.originalEvent）{
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function（elem，type，handle）{

	//普通对象需要这个“if”
	if（elem.removeEventListener）{
		elem.removeEventListener（type，handle）;
	}
};

jQuery.Event = function（src，props）{

	//允许没有'new'关键字的实例化
	if（！（此实例为jQuery.Event））{
		返回新的jQuery.Event（src，props）;
	}

	//事件对象
	if（src && src.type）{
		this.originalEvent = src;
		this.type = src.type;

		//冒泡文档的事件可能已标记为已阻止
		//由树下面的处理程序组成; 反映正确的价值。
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	构造函数：jQuery.Event，
	isDefaultPrevented：returnFalse，
	isPropagationStopped：returnFalse，
	isImmediatePropagationStopped：returnFalse，
	isSimulated：false，

	preventDefault：function（）{
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if（e &&！this.isSimulated）{
			e.preventDefault（）;
		}
	}，
	stopPropagation：function（）{
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if（e &&！this.isSimulated）{
			e.stopPropagation（）;
		}
	}，
	stopImmediatePropagation：function（）{
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if（e &&！this.isSimulated）{
			e.stopImmediatePropagation（）;
		}

		this.stopPropagation（）;
	}
};

//包括所有常见的事件道具，包括KeyEvent和MouseEvent特定的道具
jQuery.each（{
	altKey：是的，
	气泡：真的，
	可取消的：是的，
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if（types && types.preventDefault && types.handleObj）{

			//（event）调度jQuery.Event
			handleObj = types.handleObj;
			jQuery（types.delegateTarget）.off（
				handleObj.namespace？
					handleObj.origType +“。” + handleObj.namespace：
					handleObj.origType，
				handleObj.selector，
				handleObj.handler
			）;
			归还这个;
		}
		if（typeof types ===“object”）{

			//（types-object [，selector]）
			for（type in types）{
				this.off（type，selector，types [type]）;
			}
			归还这个;
		}
		if（selector === false || typeof selector ===“function”）{

			//（类型[，fn]）
			fn =选择器;
			selector = undefined;
		}
		if（fn === false）{
			fn = returnFalse;
		}
		return this.each（function（）{
			jQuery.event.remove（this，types，fn，selector）;
		}）;
	}
}）;


VAR

	/ * eslint-disable max-len * /

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		返回jQuery（elem）.children（“tbody”）[0] || ELEM;
	}

	返回元素;
}

//替换/恢复脚本元素的type属性以进行安全的DOM操作
function disableScript（elem）{
	elem.type =（elem.getAttribute（“type”）！== null）+“/”+ elem.type;
	返回元素;
}
function restoreScript（elem）{
	if（（elem.type ||“”）.slice（0,5）===“true /”）{
		elem.type = elem.type.slice（5）;
	} else {
		elem.removeAttribute（“type”）;
	}

	返回元素;
}

function cloneCopyEvent（src，dest）{
	var i，l，type，pdataOld，pdataCur，udataOld，udataCur，events;

	if（dest.nodeType！== 1）{
		返回;
	}

	// 1.复制私人数据：事件，处理程序等
	if（dataPriv.hasData（src））{
		pdataOld = dataPriv.access（src）;
		pdataCur = dataPriv.set（dest，pdataOld）;
		events = pdataOld.events;

		if（events）{
			删除pdataCur.handle;
			pdataCur.events = {};

			for（输入事件）{
				for（i = 0，l = events [type] .length; i <l; i ++）{
					jQuery.event.add（dest，type，events [type] [i]）;
				}
			}
		}
	}

	// 2.复制用户数据
	if（dataUser.hasData（src））{
		udataOld = dataUser.access（src）;
		udataCur = jQuery.extend（{}，udataOld）;

		dataUser.set（dest，udataCur）;
	}
}

//修复IE错误，请参阅支持测试
function fixInput（src，dest）{
	var nodeName = dest.nodeName.toLowerCase（）;

	//无法保持克隆复选框或单选按钮的已检查状态。
	if（nodeName ===“input”&& rcheckableType.test（src.type））{
		dest.checked = src.checked;

	//克隆选项时，无法将所选选项返回到默认选定状态
	} else if（nodeName ===“input”|| nodeName ===“textarea”）{
		dest.defaultValue = src.defaultValue;
	}
}

function domManip（collection，args，callback，ignored）{

	//展平任何嵌套数组
	args = concat.apply（[]，args）;

	var片段，第一个，脚本，hasScripts，node，doc，
		i = 0，
		l = collection.length，
		iNoClone = l  -  1，
		value = args [0]，
		valueIsFunction = isFunction（value）;

	//我们无法在WebKit中克隆包含checked的节点片段
	if（valueIsFunction ||
			（l> 1 && typeof value ===“string”&&
				！support.checkClone && rchecked.test（value）））{
		return collection.each（function（index）{
			var self = collection.eq（index）;
			if（valueIsFunction）{
				args [0] = value.call（this，index，self.html（））;
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if（hasScripts）{

						//支持：仅限Android <= 4.0，仅限PhantomJS 1
						// push.apply（_，arraylike）抛出古老的WebKit
						jQuery.merge（scripts，getAll（node，“script”））;
					}
				}

				callback.call（collection [i]，node，i）;
			}

			if（hasScripts）{
				doc = scripts [scripts.length  -  1] .ownerDocument;

				//重新启用脚本
				jQuery.map（scripts，restoreScript）;

				//在第一次文档插入时评估可执行脚本
				for（i = 0; i <hasScripts; i ++）{
					node = scripts [i];
					if（rscriptType.test（node.type ||“”）&&
						！dataPriv.access（node，“globalEval”）&&
						jQuery.contains（doc，node））{

						if（node.src &&（node.type ||“”）。toLowerCase（）！==“module”）{

							//可选的AJAX依赖项，但如果不存在则不会运行脚本
							if（jQuery._evalUrl）{
								jQuery._evalUrl（node.src）;
							}
						} else {
							DOMEval（node.textContent.replace（rcleanScript，“”），doc，node）;
						}
					}
				}
			}
		}
	}

	回收;
}

function remove（elem，selector，keepData）{
	var节点，
		nodes = selector？jQuery.filter（selector，elem）：elem，
		i = 0;

	for（;（node = nodes [i]）！= null; i ++）{
		if（！keepData && node.nodeType === 1）{
			jQuery.cleanData（getAll（node））;
		}

		if（node.parentNode）{
			if（keepData && jQuery.contains（node.ownerDocument，node））{
				setGlobalEval（getAll（node，“script”））;
			}
			node.parentNode.removeChild（node）;
		}
	}

	返回元素;
}

jQuery.extend（{
	htmlPrefilter：function（html）{
		return html.replace（rxhtmlTag，“<$ 1> </ $ 2>”）;
	}，

	clone：function（elem，dataAndEvents，deepDataAndEvents）{
		var i，l，srcElements，destElements，
			clone = elem.cloneNode（true），
			inPage = jQuery.contains（elem.ownerDocument，elem）;

		//修复IE克隆问题
		if（！support.noCloneChecked &&（elem.nodeType === 1 || elem.nodeType === 11）&&
				！jQuery.isXMLDoc（elem））{

			//我们出于性能原因避开了Sizzle：https：//jsperf.com/getall-vs-sizzle/2
			destElements = getAll（clone）;
			srcElements = getAll（elem）;

			for（i = 0，l = srcElements.length; i <l; i ++）{
				fixInput（srcElements [i]，destElements [i]）;
			}
		}

		//将事件从原始复制到克隆
		if（dataAndEvents）{
			if（deepDataAndEvents）{
				srcElements = srcElements || getAll（elem）;
				destElements = destElements || getAll（clone）;

				for（i = 0，l = srcElements.length; i <l; i ++）{
					cloneCopyEvent（srcElements [i]，destElements [i]）;
				}
			} else {
				cloneCopyEvent（elem，clone）;
			}
		}

		//保留脚本评估历史记录
		destElements = getAll（clone，“script”）;
		if（destElements.length> 0）{
			setGlobalEval（destElements，！inPage && getAll（elem，“script”））;
		}

		//返回克隆的集合
		返回克隆;
	}，

	cleanData：function（elems）{
		var data，elem，type，
			special = jQuery.event.special，
			i = 0;

		for（;（elem = elems [i]）！== undefined; i ++）{
			if（acceptData（elem））{
				if（（data = elem [dataPriv.expando]））{
					if（data.events）{
						for（输入data.events）{
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData（getAll（elem，false））;

				//删除所有剩余的节点
				elem.textContent =“”;
			}
		}

		归还这个;
	}，

	clone：function（dataAndEvents，deepDataAndEvents）{
		dataAndEvents = dataAndEvents == null？false：dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null？dataAndEvents：deepDataAndEvents;

		return this.map（function（）{
			return jQuery.clone（this，dataAndEvents，deepDataAndEvents）;
		}）;
	}，

	html：function（value）{
		return access（this，function（value）{
			var elem = this [0] || {}，
				i = 0，
				l = this.length;

			if（value === undefined && elem.nodeType === 1）{
				return elem.innerHTML;
			}

			//看看我们是否可以使用快捷方式并使用innerHTML
			if（typeof value ===“string”&&！rnoInnerhtml.test（value）&&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if（jQuery.inArray（this，ignored）<0）{
				jQuery.cleanData（getAll（this））;
				if（parent）{
					parent.replaceChild（elem，this）;
				}
			}

		//强制回调调用
		}，被忽略）;
	}
}）;

jQuery.each（{
	appendTo：“追加”，
	prependTo：“prepend”，
	insertBefore：“before”，
	insertAfter：“after”，
	replaceAll：“replaceWith”
}，function（name，original）{
	jQuery.fn [name] = function（selector）{
		var elems，
			ret = []，
			insert = jQuery（selector），
			last = insert.length  -  1，
			i = 0;

		for（; i <= last; i ++）{
			elems = i ===最后？这个：this.clone（true）;
			jQuery（insert [i]）[original]（elems）;

			//支持：仅限Android <= 4.0，仅限PhantomJS 1
			// .get（）因为push.apply（_，arraylike）抛出了古老的WebKit
			push.apply（ret，elems.get（））;
		}

		return this.pushStack（ret）;
	};
}）;
var rnumnonpx = new RegExp（“^（”+ pnum +“）（?! px）[az％] + $”，“i”）;

var getStyles = function（elem）{

		//支持：IE <= 11，Firefox <= 30（＃15098，＃14150）
		// IE会抛出弹出窗口中创建的元素
		// FF同时通过“defaultView.getComputedStyle”抛出框架元素
		var view = elem.ownerDocument.defaultView;

		if（！view ||！view.opener）{
			view = window;
		}

		return view.getComputedStyle（elem）;
	};

var rboxStyle = new RegExp（cssExpand.join（“|”），“i”）;



（function（）{

	//执行pixelPosition和boxSizingReliable测试只需要一个布局
	//所以它们同时被执行以保存第二个计算。
	function computeStyleTests（）{

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		//有些样式会返回百分比值，即使它们不应该
		div.style.right =“60％”;
		pixelBoxStylesVal = roundPixelMeasures（divStyle.right）=== 36;

		//支持：仅限IE 9  -  11
		//检测盒子大小调整的内容维度的误报：border-box元素
		boxSizingReliableVal = roundPixelMeasures（divStyle.width）=== 36;

		//支持：仅限IE 9
		//检测溢出：滚动螺旋（gh-3699）
		div.style.position =“绝对”;
		scrollboxSizeVal = div.offsetWidth === 36 || “绝对”;

		documentElement.removeChild（container）;

		//对div进行Nullify，使其不会存储在内存中
		//它也是检查已经执行的标志
		div = null;
	}

	function roundPixelMeasures（measure）{
		return Math.round（parseFloat（measure））;
	}

	var pixelPositionVal，boxSizingReliableVal，scrollboxSizeVal，pixelBoxStylesVal，
		reliableMarginLeftVal，
		container = document.createElement（“div”），
		div = document.createElement（“div”）;

	//在有限（非浏览器）环境中尽早完成
	if（！div.style）{
		返回;
	}

	//支持：IE <= 9  -  11
	//克隆元素的样式影响克隆的源元素（＃8908）
	div.style.backgroundClip =“content-box”;
	div.cloneNode（true）.style.backgroundClip =“”;
	support.clearCloneStyle = div.style.backgroundClip ===“content-box”;

	jQuery.extend（support，{
		boxSizingReliable：function（）{
			computeStyleTests（）;
			return boxSizingReliableVal;
		}，
		pixelBoxStyles：function（）{
			computeStyleTests（）;
			return pixelBoxStylesVal;
		}，
		pixelPosition：function（）{
			computeStyleTests（）;
			return pixelPositionVal;
		}，
		reliableMarginLeft：function（）{
			computeStyleTests（）;
			return reliableMarginLeftVal;
		}，
		scrollboxSize：function（）{
			computeStyleTests（）;
			return scrollboxSizeVal;
		}
	}）;
}）（）;


function curCSS（elem，name，calculated）{
	var width，minWidth，maxWidth，ret，

		//支持：Firefox 51+
		//以某种方式计算之前检索样式
		//修复了获取错误值的问题
		//在分离的元素上
		style = elem.style;

	computed = computed || getStyles（elem）;

	//需要getPropertyValue：
	// .css（'filter'）（仅限IE 9，＃12537）
	// .css（' -  customProperty）（＃3144）
	if（computed）{
		ret = computed.getPropertyValue（name）|| 计算[名称];

		if（ret ===“”&&！jQuery.contains（elem.ownerDocument，elem））{
			ret = jQuery.style（elem，name）;
		}

		//致敬Dean Edwards“令人敬畏的黑客”
		// Android浏览器返回某些值的百分比，
		//但宽度似乎是可靠的像素。
		//这违反了CSSOM草案规范：
		// https://drafts.c​​sswg.org/cssom/#resolved-values
		if（！support.pixelBoxStyles（）&& rnumnonpx.test（ret）&& rboxStyle.test（name））{

			//记住原始值
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			//输入新值以获取计算值
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			//恢复更改的值
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret！== undefined？

		//支持：IE <= 9  -  11
		// IE将zIndex值作为整数返回。
		ret +“”：
		RET;
}


function addGetHookIf（conditionFn，hookFn）{

	//定义钩子，如果确实需要，我们将在第一次运行时检查。
	返回{
		get：function（）{
			if（conditionFn（））{

				//不需要钩子（或者因为它不可能使用它
				//缺少依赖项），删除它。
				删除this.get;
				返回;
			}

			//需要钩子; 重新定义它以便不再执行支持测试。
			return（this.get = hookFn）.apply（this，arguments）;
		}
	};
}


VAR

	//如果display is none或以table开头，则可以交换
	//除了“table”，“table-cell”或“table-caption”
	//在此处查看显示值：https：//developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = / ^（无|表（？！ -  c [ea]）。+）/，
	rcustomProp = / ^  -  /，
	cssShow = {position：“absolute”，visibility：“hidden”，display：“block”}，
	cssNormalTransform = {
		letterSpacing：“0”，
		fontWeight：“400”
	}，

	cssPrefixes = [“Webkit”，“Moz”，“ms”]，
	emptyStyle = document.createElement（“div”）。style;

//返回映射到潜在供应商前缀属性的css属性
function vendorPropName（name）{

	//不以供应商为前缀的名称的快捷方式
	if（name in emptyStyle）{
		返回名称;
	}

	//检查供应商的前缀名称
	var capName = name [0] .toUpperCase（）+ name.slice（1），
		i = cssPrefixes.length;

	当我 -  ） {
		name = cssPrefixes [i] + capName;
		if（name in emptyStyle）{
			返回名称;
		}
	}
}

//返回一个映射到jQuery.cssProps建议的属性或者
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for（; i <4; i + = 2）{

		//两个框模型都不包括边距
		if（box ===“margin”）{
			delta + = jQuery.css（elem，box + cssExpand [i]，true，styles）;
		}

		//如果我们带到内容框，我们正在寻找“填充”或“边框”或“边距”
		if（！isBorderBox）{

			//添加填充
			delta + = jQuery.css（elem，“padding”+ cssExpand [i]，true，styles）;

			//对于“border”或“margin”，添加边框
			if（box！==“padding”）{
				delta + = jQuery.css（elem，“border”+ cssExpand [i] +“Width”，true，styles）;

			//但是仍然要跟踪它
			} else {
				extra + = jQuery.css（elem，“border”+ cssExpand [i] +“Width”，true，styles）;
			}

		//如果我们带边框（内容+填充+边框），我们正在寻找“内容”或
		//“填充”或“边距”
		} else {

			//对于“内容”，减去填充
			if（box ===“content”）{
				delta  -  = jQuery.css（elem，“padding”+ cssExpand [i]，true，styles）;
			}

			//对于“内容”或“填充”，减去边框
			if（box！==“margin”）{
				delta  -  = jQuery.css（elem，“border”+ cssExpand [i] +“Width”，true，styles）;
			}
		}
	}

	//通过提供computedVal请求时，为正内容框滚动装订线帐户
	if（！isBorderBox && computedVal> = 0）{

		// offsetWidth / offsetHeight是内容，填充，滚动装订线和边框的舍入值
		//假设整数滚动装订线，减去其余部分并向下舍入
		delta + = Math.max（0，Math.ceil（
			elem [“offset”+ dimension [0] .toUpperCase（）+ dimension.slice（1）]  - 
			computedVal  - 
			三角洲 - 
			额外 - 
			0.5
		））;
	}

	回归三角洲;
}

function getWidthOrHeight（elem，dimension，extra）{

	//从计算样式开始
	var styles = getStyles（elem），
		val = curCSS（elem，dimension，styles），
		isBorderBox = jQuery.css（elem，“boxSizing”，false，styles）===“border-box”，
		valueIsBorderBox = isBorderBox;

	//支持：Firefox <= 54
	//根据需要返回混淆的非像素值或假装无知。
	if（rnumnonpx.test（val））{
		if（！extra）{
			返回;
		}
		val =“auto”;
	}

	//如果浏览器返回不可靠的值，请检查样式
	//为getComputedStyle默默地回归到可靠的elem.style
	valueIsBorderBox = valueIsBorderBox &&
		（support.boxSizingReliable（）|| val === elem.style [dimension]）;

	//当值为“auto”时，回退到offsetWidth / offsetHeight
	//对于没有明确设置的内联元素会发生这种情况（gh-3571）
	//支持：仅限Android <= 4.1  -  4.3
	//对于误报的内联维度（gh-3602）也使用offsetWidth / offsetHeight
	if（val ===“auto”||
		！parseFloat（val）&& jQuery.css（elem，“display”，false，styles）===“inline”）{

		val = elem [“offset”+ dimension [0] .toUpperCase（）+ dimension.slice（1）];

		// offsetWidth / offsetHeight提供边框值
		valueIsBorderBox = true;
	}

	//标准化“”和自动
	val = parseFloat（val）|| 0;

	//调整元素的盒子模型
	回归（val +
		boxModelAdjustment（
			ELEM，
			尺寸，
			额外的|| （isBorderBox？“border”：“content”），
			valueIsBorderBox，
			款式，

			//提供当前计算的大小以请求滚动装订线计算（gh-3589）
			VAL
		）
	）+“px”;
}

jQuery.extend（{

	//添加样式属性挂钩以覆盖默认值
	//获取和设置样式属性的行为
	cssHooks：{
		不透明度：{
			get：function（elem，computed）{
				if（computed）{

					//我们应该总是从不透明度中获取一个数字
					var ret = curCSS（elem，“opacity”）;
					return ret ===“”？“1”：ret;
				}
			}
		}
	}，

	//不要自动将“px”添加到这些可能无单元的属性中
	cssNumber：{
		“animationIterationCount”：是的，
		“columnCount”：是的，
		“fillOpacity”：是的，
		“flexGrow”：是的，
		“flexShrink”：是的，
		“fontWeight”：是的，
		“lineHeight”：是的，
		“不透明”：是的，
		“秩序”：是的，
		“孤儿”：是的，
		“寡妇”：是的，
		“zIndex”：是的，
		“缩放”：是的
	}，

	//添加以前要修复其名称的属性
	//设置或获取值
	cssProps：{}，

	//在DOM节点上获取并设置样式属性
	style：function（elem，name，value，extra）{

		//不要在文本和注释节点上设置样式
		if（！elem || elem.nodeType === 3 || elem.nodeType === 8 ||！elem.style）{
			返回;
		}

		//确保我们正在使用正确的名称
		var ret，type，hooks，
			origName = camelCase（name），
			isCustomProp = rcustomProp.test（name），
			style = elem.style;

		//确保我们正在使用正确的名称。我们没有
		//想要查询值，如果它是CSS自定义属性
		//因为它们是用户定义的。
		if（！isCustomProp）{
			name = finalPropName（origName）;
		}

		//获取前缀版本的钩子，然后是未加前缀的版本
		hooks = jQuery.cssHooks [name] || jQuery.cssHooks [origName];

		//检查我们是否设置了值
		if（value！== undefined）{
			type = typeof value;

			//将“+ =”或“ -  =”转换为相对数字（＃7345）
			if（type ===“string”&&（ret = rcssNum.exec（value））&& ret [1]）{
				value = adjustCSS（elem，name，ret）;

				//修复了错误＃9237
				type =“number”;
			}

			//确保未设置null和NaN值（＃7116）
			if（value == null || value！== value）{
				返回;
			}

			//如果传入了一个数字，添加单位（某些CSS属性除外）
			if（type ===“number”）{
				值+ = ret && ret [3] || （jQuery.cssNumber [origName]？“”：“px”）;
			}

			// background- * props影响原始克隆的值
			if（！support.clearCloneStyle && value ===“”&& name.indexOf（“background”）=== 0）{
				style [name] =“inherit”;
			}

			//如果提供了一个钩子，请使用该值，否则只需设置指定的值
			if（！hooks ||！（挂钩中的“set”）||
				（value = hooks.set（elem，value，extra））！== undefined）{

				if（isCustomProp）{
					style.setProperty（name，value）;
				} else {
					style [name] = value;
				}
			}

		} else {

			//如果提供了一个钩子，那么从那里获取非计算值
			if（hooks &&“get”in hooks &&
				（ret = hooks.get（elem，false，extra））！== undefined）{

				返回;
			}

			//否则只从样式对象中获取值
			返回样式[名称];
		}
	}，

	css：function（elem，name，extra，styles）{
		var val，num，hooks，
			origName = camelCase（name），
			isCustomProp = rcustomProp.test（name）;

		//确保我们正在使用正确的名称。我们没有
		//如果它是CSS自定义属性，则想要修改该值
		//因为它们是用户定义的。
		if（！isCustomProp）{
			name = finalPropName（origName）;
		}

		//尝试带前缀的名称，后跟未加前缀的名称
		hooks = jQuery.cssHooks [name] || jQuery.cssHooks [origName];

		//如果提供了一个钩子，那么从那里获取计算值
		if（hooks &&“get”in hooks）{
			val = hooks.get（elem，true，extra）;
		}

		//否则，如果存在获取计算值的方法，请使用它
		if（val === undefined）{
			val = curCSS（elem，name，styles）;
		}

		//将“normal”转换为计算值
		if（val ===“normal”&& cssNormalTransform中的name）{
			val = cssNormalTransform [name];
		}

		//如果强制或提供限定符并且val看起来是数字，则生成数字
		if（extra ===“”|| extra）{
			num = parseFloat（val）;
			return extra === true || isFinite（num）？num || 0：val;
		}

		返回;
	}
}）;

jQuery.each（[“height”，“width”]，function（i，dimension）{
	jQuery.cssHooks [dimension] = {
		get：function（elem，computed，extra）{
			if（computed）{

				//如果我们无形地显示它们，某些元素可以有维度信息
				//但它必须具有有益的当前显示样式
				return rdisplayswap.test（jQuery.css（elem，“display”））&&

					//支持：Safari 8+
					// Safari中的表列具有非零offsetWidth和零
					// getBoundingClientRect（）。width除非显示更改。
					//支持：IE <= 11
					//在断开连接的节点上运行getBoundingClientRect
					//在IE中抛出错误。
					（！elem.getClientRects（）。length ||！elem.getBoundingClientRect（）。width）？
						swap（elem，cssShow，function（）{
							return getWidthOrHeight（elem，dimension，extra）;
						}）：
						getWidthOrHeight（elem，dimension，extra）;
			}
		}，

		set：function（elem，value，extra）{
			var匹配，
				styles = getStyles（elem），
				isBorderBox = jQuery.css（elem，“boxSizing”，false，styles）===“border-box”，
				subtract = extra && boxModelAdjustment（
					ELEM，
					尺寸，
					额外，
					isBorderBox，
					款式
				）;

			//通过比较偏移*与计算和来计算不可靠的边框尺寸
			//伪造内容框以获取边框和填充（gh-3699）
			if（isBorderBox && support.scrollboxSize（）=== styles.position）{
				减去 -  = Math.ceil（
					elem [“offset”+ dimension [0] .toUpperCase（）+ dimension.slice（1）]  - 
					parseFloat（styles [dimension]） - 
					boxModelAdjustment（elem，dimension，“border”，false，styles） - 
					0.5
				）;
			}

			//如果需要进行值调整，则转换为像素
			if（减去&&（matches = rcssNum.exec（value））&&
				（匹配[3] ||“px”）！==“px”）{

				elem.style [dimension] = value;
				value = jQuery.css（elem，dimension）;
			}

			return setPositiveNumber（elem，value，subtract）;
		}
	};
}）;

jQuery.cssHooks.marginLeft = addGetHookIf（support.reliableMarginLeft，
	function（elem，calculated）{
		if（computed）{
			return（parseFloat（curCSS（elem，“marginLeft”））||
				elem.getBoundingClientRect（）。left  - 
					swap（elem，{marginLeft：0}，function（）{
						return elem.getBoundingClientRect（）。left;
					}）
				）+“px”;
		}
	}
）;

//动画使用这些钩子来扩展属性
jQuery.each（{
	保证金：“”，
	填充：“”，
	边框：“宽度”
}，function（prefix，suffix）{
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				返回地图;
			}

			返回值！== undefined？
				jQuery.style（elem，name，value）：
				jQuery.css（elem，name）;
		}，name，value，arguments.length> 1）;
	}
}）;


function Tween（elem，options，prop，end，easing）{
	返回新的Tween.prototype.init（elem，options，prop，end，easing）;
}
jQuery.Tween = Tween;

Tween.prototype = {
	构造函数：Tween，
	init：function（elem，options，prop，end，easing，unit）{
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur（）;
		this.end = end;
		this.unit = unit || （jQuery.cssNumber [prop]？“”：“px”）;
	}，
	cur：function（）{
		var hooks = Tween.propHooks [this.prop];

		return hooks && hooks.get？
			hooks.get（this）：
			Tween.propHooks._default.get（this）;
	}，
	run：function（percent）{
		变差，
			hooks = Tween.propHooks [this.prop];

		if（this.options.duration）{
			this.pos = eased = jQuery.easing [this.easing]（
				％，this.options.duration * percent，0,1，this.options.duration
			）;
		} else {
			this.pos = eased = percent;
		}
		this.now =（this.end  -  this.start）* eased + this.start;

		if（this.options.step）{
			this.options.step.call（this.elem，this.now，this）;
		}

		if（hooks && hooks.set）{
			hooks.set（this）;
		} else {
			Tween.propHooks._default.set（this）;
		}
		归还这个;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default：{
		get：function（tween）{
			变量结果;

			//当元素不是DOM元素时，直接在元素上使用属性，
			//或者当没有匹配的样式属性存在时。
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

//返回compat <1.8扩展点
jQuery.fx.step = {};




VAR
	fxNow，inProgress，
	rfxtypes = / ^（？：toggle | show | hide）$ /，
	rrun = / queueHooks $ /;

function schedule（）{
	if（inProgress）{
		if（document.hidden === false && window.requestAnimationFrame）{
			window.requestAnimationFrame（schedule）;
		} else {
			window.setTimeout（schedule，jQuery.fx.interval）;
		}

		jQuery.fx.tick（）;
	}
}

//同步创建的动画将同步运行
function createFxNow（）{
	window.setTimeout（function（）{
		fxNow = undefined;
	}）;
	return（fxNow = Date.now（））;
}

//生成参数以创建标准动画
function genFx（type，includeWidth）{
	var哪个，
		i = 0，
		attrs = {height：type};

	//如果我们包含width，则步长值为1以执行所有cssExpand值，
	//否则步长值为2以跳过左右
	includeWidth = includeWidth？1：0;
	for（; i <4; i + = 2  -  includeWidth）{
		which = cssExpand [i];
		attrs [“margin”+ which] = attrs [“padding”+ which] = type;
	}

	if（includeWidth）{
		attrs.opacity = attrs.width = type;
	}

	返回;
}

function createTween（value，prop，animation）{
	var tween，
		collection =（Animation.tweeners [prop] || []）.concat（Animation.tweeners [“*”]），
		index = 0，
		length = collection.length;
	for（; index <length; index ++）{
		if（（tween = collection [index] .call（animation，prop，value）））{

			//我们已经完成了这个属性
			返回补间;
		}
	}
}

function defaultPrefilter（elem，props，opts）{
	var prop，value，toggle，hooks，oldfire，propTween，restoreDisplay，display，
		道具||中的isBox =“width” 道具中的“高度”
		动画=这个，
		orig = {}，
		style = elem.style，
		hidden = elem.nodeType && isHiddenWithinTree（elem），
		dataShow = dataPriv.get（elem，“fxshow”）;

	//队列跳过动画劫持了fx钩子
	if（！opts.queue）{
		hooks = jQuery._queueHooks（elem，“fx”）;
		if（hooks.unqueued == null）{
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function（）{
				if（！hooks.unqueued）{
					oldfire（）;
				}
			};
		}
		hooks.unqueued ++;

		anim.always（function（）{

			//确保在完成之前调用完整的处理程序
			anim.always（function（）{
				hooks.unqueued--;
				if（！jQuery.queue（elem，“fx”）。length）{
					hooks.empty.fire（）;
				}
			}）;
		}）;
	}

	//检测显示/隐藏动画
	for（prop in props）{
		value = props [prop];
		if（rfxtypes.test（value））{
			删除道具[prop];
			toggle = toggle || 值===“切换”;
			if（value ===（hidden？“hide”：“show”））{

				//如果这是一个“节目”，假装被隐藏
				//仍有停止显示/隐藏的数据
				if（value ===“show”&& dataShow && dataShow [prop]！== undefined）{
					hidden = true;

				//忽略所有其他无操作显示/隐藏数据
				} else {
					继续;
				}
			}
			orig [prop] = dataShow && dataShow [prop] || jQuery.style（elem，prop）;
		}
	}

	//如果这是一个像.hide（）那样的无操作，则退出。hide（）
	propTween =！jQuery.isEmptyObject（props）;
	if（！propTween && jQuery.isEmptyObject（orig））{
		返回;
	}

	//在框动画期间限制“溢出”和“显示”样式
	if（isBox && elem.nodeType === 1）{

		//支持：IE <= 9  -  11，边缘12  -  15
		//记录所有3个溢出属性，因为IE不会推断速记
		//来自具有相同价值的overflowX和overflowY以及Edge只是镜像
		//那里的overflowX值。
		opts.overflow = [style.overflow，style.overflowX，style.overflowY];

		//识别显示类型，优先选择CSS级联中的旧显示/隐藏数据
		restoreDisplay = dataShow && dataShow.display;
		if（restoreDisplay == null）{
			restoreDisplay = dataPriv.get（elem，“display”）;
		}
		display = jQuery.css（elem，“display”）;
		if（display ===“none”）{
			if（restoreDisplay）{
				display = restoreDisplay;
			} else {

				//通过临时强制可见性获取非空值
				showHide（[elem]，true）;
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css（elem，“display”）;
				showHide（[elem]）;
			}
		}

		//将内联元素设置为内联块动画
		if（display ===“inline”|| display ===“inline-block”&& restoreDisplay！= null）{
			if（jQuery.css（elem，“float”）===“none”）{

				//在纯粹的显示/隐藏动画结束时恢复原始显示值
				if（！propTween）{
					anim.done（function（）{
						style.display = restoreDisplay;
					}）;
					if（restoreDisplay == null）{
						display = style.display;
						restoreDisplay = display ===“none”？“”：显示;
					}
				}
				style.display =“inline-block”;
			}
		}
	}

	if（opts.overflow）{
		style.overflow =“hidden”;
		anim.always（function（）{
			style.overflow = opts.overflow [0];
			style.overflowX = opts.overflow [1];
			style.overflowY = opts.overflow [2];
		}）;
	}

	//实现显示/隐藏动画
	propTween = false;
	for（prop in orig）{

		//此元素动画的常规显示/隐藏设置
		if（！propTween）{
			if（dataShow）{
				if（dataShow中的“hidden”）{
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access（elem，“fxshow”，{display：restoreDisplay}）;
			}

			//存储隐藏/可见以进行切换，以便`.stop（）。toggle（）`“反转”
			if（toggle）{
				dataShow.hidden =！hidden;
			}

			//在动画之前显示元素
			if（hidden）{
				showHide（[elem]，true）;
			}

			/ * eslint-disable no-loop-func * /

			anim.done（function（）{

			/ * eslint-enable no-loop-func * /

				//“隐藏”动画的最后一步实际上是隐藏了元素
				if（！hidden）{
					showHide（[elem]）;
				}
				dataPriv.remove（elem，“fxshow”）;
				for（prop in orig）{
					jQuery.style（elem，prop，orig [prop]）;
				}
			}）;
		}

		//每个属性设置
		propTween = createTween（hidden？dataShow [prop]：0，prop，anim）;
		if（！（dataShow中的prop））{
			dataShow [prop] = propTween.start;
			if（hidden）{
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter（props，specialEasing）{
	var index，name，easing，value，hooks;

	// camelCase，specialEasing并展开cssHook传递
	for（道具中的索引）{
		name = camelCase（index）;
		easing = specialEasing [name];
		value = props [index];
		if（Array.isArray（value））{
			easing = value [1];
			value = props [index] = value [0];
		}

		if（index！== name）{
			道具[名称] =价值;
			删除道具[索引];
		}

		hooks = jQuery.cssHooks [name];
		if（hooks &&“expand”in hooks）{
			value = hooks.expand（value）;
			删除道具[名称];

			//不完全是$ .extend，这不会覆盖现有的密钥。
			//重用'index'因为我们有正确的“名字”
			for（index in value）{
				if（！（props in props））{
					道具[index] =价值[指数];
					specialEasing [index] =缓和;
				}
			}
		} else {
			specialEasing [name] = easing;
		}
	}
}

function动画（elem，properties，options）{
	var结果，
		停了下来，
		index = 0，
		length = Animation.prefilters.length，
		deferred = jQuery.Deferred（）。always（function（）{

			//不要匹配：动画选择器中的elem
			删除tick.elem;
		}），
		tick = function（）{
			if（已停止）{
				返回false;
			}
			var currentTime = fxNow || createFxNow（）
				remaining = Math.max（0，animation.startTime + animation.duration  -  currentTime），

				//支持：仅限Android 2.3
				//过时的崩溃bug不允许我们使用`1  - （0.5 || 0）`（＃12497）
				temp = remaining / animation.duration || 0，
				百分比= 1  - 临时，
				index = 0，
				length = animation.tweens.length;

			for（; index <length; index ++）{
				animation.tweens [index] .run（percent）;
			}

			deferred.notifyWith（elem，[animation，percent，remaining]）;

			//如果还有更多事要做，那就屈服吧
			if（percent <1 && length）{
				返回剩余;
			}

			//如果这是一个空动画，请综合最终进度通知
			if（！length）{
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					//如果我们要结束，我们想要运行所有的补间
					//否则我们跳过这部分
					length = gotoEnd？animation.tweens.length：0;
				if（已停止）{
					归还这个;
				}
				停止=真;
				for（; index <length; index ++）{
					animation.tweens [index] .run（1）;
				}

				//当我们播放最后一帧时解析; 否则，拒绝
				if（gotoEnd）{
					deferred.notifyWith（elem，[animation，1,0]）;
					deferred.resolveWith（elem，[animation，gotoEnd]）;
				} else {
					deferred.rejectWith（elem，[animation，gotoEnd]）;
				}
				归还这个;
			}
		}），
		props = animation.props;

	propFilter（props，animation.opts.specialEasing）;

	for（; index <length; index ++）{
		result = Animation.prefilters [index] .call（animation，elem，props，animation.opts）;
		if（result）{
			if（isFunction（result.stop））{
				jQuery._queueHooks（animation.elem，animation.opts.queue）.stop =
					result.stop.bind（result）;
			}
			返回结果;
		}
	}

	jQuery.map（props，createTween，animation）;

	if（isFunction（animation.opts.start））{
		animation.opts.start.call（elem，animation）;
	}

	//附加选项的回调
	动画
		.progress（animation.opts.progress）
		.done（animation.opts.done，animation.opts.complete）
		.fail（animation.opts.fail）
		.always（animation.opts.always）;

	jQuery.fx.timer（
		jQuery.extend（tick，{
			elem：elem，
			动画：动画，
			queue：animation.opts.queue
		}）
	）;

	回归动画;
}

jQuery.Animation = jQuery.extend（Animation，{

	tweeners：{
		“*”：[function（prop，value）{
			var tween = this.createTween（prop，value）;
			adjustCSS（tween.elem，prop，rcssNum.exec（value），tween）;
			返回补间;
		}]
	}，

	tweener：function（props，callback）{
		if（isFunction（props））{
			callback = props;
			props = [“*”];
		} else {
			props = props.match（rnothtmlwhite）;
		}

		var prop，
			index = 0，
			length = props.length;

		for（; index <length; index ++）{
			prop = props [index];
			Animation.tweeners [prop] = Animation.tweeners [prop] || [];
			Animation.tweeners [prop] .unshift（callback）;
		}
	}，

	prefilters：[defaultPrefilter]，

	prefilter：function（callback，prepend）{
		if（prepend）{
			Animation.prefilters.unshift（回调）;
		} else {
			Animation.prefilters.push（回调）;
		}
	}
}）;

jQuery.speed = function（speed，easing，fn）{
	var opt = speed && typeof speed ===“object”？jQuery.extend（{}，speed）：{
		完成：fn || ！fn && easing ||
			isFunction（速度）&&速度，
		持续时间：速度，
		缓和：fn &&缓和|| 缓和&&！isFunction（缓和）&&缓和
	};

	//如果fx关闭，则转到结束状态
	if（jQuery.fx.off）{
		opt.duration = 0;

	} else {
		if（typeof opt.duration！==“number”）{
			if（在jQuery.fx.speeds中的opt.duration）{
				opt.duration = jQuery.fx.speeds [opt.duration];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	//标准化opt.queue  -  true / undefined / null  - >“fx”
	if（opt.queue == null || opt.queue === true）{
		opt.queue =“fx”;
	}

	//排队
	opt.old = opt.complete;

	opt.complete = function（）{
		if（isFunction（opt.old））{
			opt.old.call（this）;
		}

		if（opt.queue）{
			jQuery.dequeue（this，opt.queue）;
		}
	};

	返回选择;
};

jQuery.fn.extend（{
	fadeTo：function（speed，to，easing，callback）{

		//将不透明度设置为0后显示任何隐藏元素
		return this.filter（isHiddenWithinTree）.css（“opacity”，0）.show（）

			//为指定的值设置动画
			.end（）。animate（{opacity：to}，speed，easing，callback）;
	}，
	animate：function（prop，speed，easing，callback）{
		var empty = jQuery.isEmptyObject（prop），
			optall = jQuery.speed（speed，easing，callback），
			doAnimation = function（）{

				//在prop的副本上操作，这样每个属性的缓和不会丢失
				var anim = Animation（this，jQuery.extend（{}，prop），optall）;

				//清空动画，或立即完成结算
				if（empty || dataPriv.get（this，“finish”））{
					anim.stop（true）;
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if（data [index] && data [index] .stop && rrun.test（index））{
						stopQueue（data [index]）;
					}
				}
			}

			for（index = timers.length; index--;）{
				if（timers [index] .elem === this &&
					（type == null || timers [index] .queue === type））{

					timers [index] .anim.stop（gotoEnd）;
					dequeue = false;
					timers.splice（index，1）;
				}
			}

			//如果未强制执行最后一步，则启动队列中的下一个。
			//定时器当前将调用它们的完整回调
			//将出列队，但前提是他们是gotoEnd。
			if（dequeue ||！gotoEnd）{
				jQuery.dequeue（this，type）;
			}
		}）;
	}，
	完成：function（type）{
		if（type！== false）{
			type = type || “FX”;
		}
		return this.each（function（）{
			var index，
				data = dataPriv.get（this），
				queue = data [type +“queue”]，
				hooks = data [type +“queueHooks”]，
				timers = jQuery.timers，
				长度=队列？queue.length：0;

			//启用私有数据的完成标志
			data.finish = true;

			//首先清空队列
			jQuery.queue（this，type，[]）;

			if（hooks && hooks.stop）{
				hooks.stop.call（this，true）;
			}

			//查找任何活动动画，然后完成它们
			for（index = timers.length; index--;）{
				if（timers [index] .elem === this && timers [index] .queue === type）{
					timers [index] .anim.stop（true）;
					timers.splice（index，1）;
				}
			}

			//在旧队列中查找任何动画并完成它们
			for（index = 0; index <length; index ++）{
				if（queue [index] && queue [index] .finish）{
					queue [index] .finish.call（this）;
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function（）{
	var计时器，
		i = 0，
		timers = jQuery.timers;

	fxNow = Date.now（）;

	for（; i <timers.length; i ++）{
		timer = timers [i];

		//运行计时器并在完成后安全地将其移除（允许外部移除）
		if（！timer（）&& timers [i] === timer）{
			timers.splice（i  - ，1）;
		}
	}

	if（！timers.length）{
		jQuery.fx.stop（）;
	}
	fxNow = undefined;
};

jQuery.fx.timer = function（timer）{
	jQuery.timers.push（timer）;
	jQuery.fx.start（）;
};

jQuery.fx.interval = 13;
jQuery.fx.start = function（）{
	if（inProgress）{
		返回;
	}

	inProgress = true;
	时间表（）;
};

jQuery.fx.stop = function（）{
	inProgress = null;
};

jQuery.fx.speeds = {
	慢：600，
	快：200，

	//默认速度
	_default：400
};


//基于Clint Helfers的插件，经许可。
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function（time，type）{
	time = jQuery.fx？jQuery.fx.speeds [time] || 时间：时间;
	type = type || “FX”;

	return this.queue（type，function（next，hooks）{
		var timeout = window.setTimeout（next，time）;
		hooks.stop = function（）{
			window.clearTimeout（timeout）;
		};
	}）;
};


（function（）{
	var input = document.createElement（“input”），
		select = document.createElement（“select”），
		opt = select.appendChild（document.createElement（“option”））;

	input.type =“复选框”;

	//支持：Android <= 4.3
	//复选框的默认值应为“on”
	support.checkOn = input.value！==“”;

	//支持：IE <= 11
	//必须访问selectedIndex才能选择默认选项
	support.optSelected = opt.selected;

	//支持：IE <= 11
	//输入成为收音机后输入失去其值
	input = document.createElement（“input”）;
	input.value =“t”;
	input.type =“radio”;
	support.radioValue = input.value ===“t”;
}）（）;


var boolHook，
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend（{
	attr：function（name，value）{
		return access（this，jQuery.attr，name，value，arguments.length> 1）;
	}，

	removeAttr：function（name）{
		return this.each（function（）{
			jQuery.removeAttr（this，name）;
		}）;
	}
}）;

jQuery.extend（{
	attr：function（elem，name，value）{
		var ret，hooks，
			nType = elem.nodeType;

		//不要在文本，注释和属性节点上获取/设置属性
		if（nType === 3 || nType === 8 || nType === 2）{
			返回;
		}

		//不支持属性时回退到prop
		if（typeof elem.getAttribute ===“undefined”）{
			return jQuery.prop（elem，name，value）;
		}

		//属性挂钩由小写版本确定
		//如果定义了一个必需的钩子
		if（nType！== 1 ||！jQuery.isXMLDoc（elem））{
			hooks = jQuery.attrHooks [name.toLowerCase（）] ||
				（jQuery.expr.match.bool.test（name）？boolHook：undefined）;
		}

		if（value！== undefined）{
			if（value === null）{
				jQuery.removeAttr（elem，name）;
				返回;
			}

			if（hooks &&“set”in hooks &&
				（ret = hooks.set（elem，value，name））！== undefined）{
				返回;
			}

			elem.setAttribute（name，value +“”）;
			回报值;
		}

		if（hooks &&“get”in hooks &&（ret = hooks.get（elem，name））！== null）{
			返回;
		}

		ret = jQuery.find.attr（elem，name）;

		//不存在的属性返回null，我们规范化为undefined
		return ret == null？undefined：ret;
	}，

	attrHooks：{
		类型：{
			set：function（elem，value）{
				if（！support.radioValue && value ===“radio”&&
					nodeName（elem，“input”））{
					var val = elem.value;
					elem.setAttribute（“type”，value）;
					if（val）{
						elem.value = val;
					}
					回报值;
				}
			}
		}
	}，

	removeAttr：function（elem，value）{
		var名称，
			i = 0，

			//属性名称可以包含非HTML空白字符
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match（rnothtmlwhite）;

		if（attrNames && elem.nodeType === 1）{
			while（（name = attrNames [i ++]））{
				elem.removeAttribute（name）;
			}
		}
	}
}）;

//用于布尔属性的钩子
boolHook = {
	set：function（elem，value，name）{
		if（value === false）{

			//设置为false时删除布尔属性
			jQuery.removeAttr（elem，name）;
		} else {
			elem.setAttribute（name，name）;
		}
		返回名称;
	}
};

jQuery.each（jQuery.expr.match.bool.source.match（/ \ w + / g），function（i，name）{
	var getter = attrHandle [name] || jQuery.find.attr;

	attrHandle [name] = function（elem，name，isXML）{
		var ret，handle，
			lowercaseName = name.toLowerCase（）;

		if（！isXML）{

			//通过从getter暂时删除此函数来避免无限循环
			handle = attrHandle [lowercaseName];
			attrHandle [lowercaseName] = ret;
			ret = getter（elem，name，isXML）！= null？
				小写名称：
				空值;
			attrHandle [lowercaseName] =句柄;
		}
		返回;
	};
}）;




var rfocusable = / ^（？：input | select | textarea | button）$ / i，
	rclickable = / ^（？：a | area）$ / i;

jQuery.fn.extend（{
	prop：function（name，value）{
		return access（this，jQuery.prop，name，value，arguments.length> 1）;
	}，

	removeProp：function（name）{
		return this.each（function（）{
			删除这个[jQuery.propFix [name] || 名称 ];
		}）;
	}
}）;

jQuery.extend（{
	prop：function（elem，name，value）{
		var ret，hooks，
			nType = elem.nodeType;

		//不要在文本，注释和属性节点上获取/设置属性
		if（nType === 3 || nType === 8 || nType === 2）{
			返回;
		}

		if（nType！== 1 ||！jQuery.isXMLDoc（elem））{

			//修复名称并附加挂钩
			name = jQuery.propFix [name] || 名称;
			hooks = jQuery.propHooks [name];
		}

		if（value！== undefined）{
			if（hooks &&“set”in hooks &&
				（ret = hooks.set（elem，value，name））！== undefined）{
				返回;
			}

			return（elem [name] = value）;
		}

		if（hooks &&“get”in hooks &&（ret = hooks.get（elem，name））！== null）{
			返回;
		}

		return elem [name];
	}，

	propHooks：{
		tabIndex：{
			get：function（elem）{

				//支持：IE <= 9  -  11
				// elem.tabIndex并不总是返回
				//未明确设置时的正确值
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				//使用适当的属性检索（＃12072）
				var tabindex = jQuery.find.attr（elem，“tabindex”）;

				if（tabindex）{
					return parseInt（tabindex，10）;
				}

				如果（
					rfocusable.test（elem.nodeName）||
					rclickable.test（elem.nodeName）&&
					elem.href
				）{
					返回0;
				}

				返回-1;
			}
		}
	}，

	propFix：{
		“for”：“htmlFor”，
		“class”：“className”
	}
}）;

//支持：IE <= 11
//访问selectedIndex属性
//强制浏览器遵守所选的设置
//在选项上
// getter确保选中默认选项
//在optgroup中
//此代码禁用了eslint规则“no-unused-expressions”
//因为它认为这样的加入noop
if（！support.optSelected）{
	jQuery.propHooks.selected = {
		get：function（elem）{

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&（“”+ stripAndCollapse（curValue）+“”）;

				if（cur）{
					j = 0;
					while（（clazz = classes [j ++]））{
						if（cur.indexOf（“”+ clazz +“”）<0）{
							cur + = clazz +“”;
						}
					}

					//仅指定不同以避免不必要的渲染。
					finalValue = stripAndCollapse（cur）;
					if（curValue！== finalValue）{
						elem.setAttribute（“class”，finalValue）;
					}
				}
			}
		}

		归还这个;
	}，

	removeClass：function（value）{
		var classes，elem，cur，curValue，clazz，j，finalValue，
			i = 0;

		if（isFunction（value））{
			return this.each（function（j）{
				jQuery（this）.removeClass（value.call（this，j，getClass（this）））;
			}）;
		}

		if（！arguments.length）{
			return this.attr（“class”，“”）;
		}

		classes = classesToArray（value）;

		if（classes.length）{
			while（（elem = this [i ++]））{
				curValue = getClass（elem）;

				//此表达式用于提高压缩性（请参阅addClass）
				cur = elem.nodeType === 1 &&（“”+ stripAndCollapse（curValue）+“”）;

				if（cur）{
					j = 0;
					while（（clazz = classes [j ++]））{

						//删除所有*实例
						while（cur.indexOf（“”+ clazz +“”）> -1）{
							cur = cur.replace（“”+ clazz +“”，“”）;
						}
					}

					//仅指定不同以避免不必要的渲染。
					finalValue = stripAndCollapse（cur）;
					if（curValue！== finalValue）{
						elem.setAttribute（“class”，finalValue）;
					}
				}
			}
		}

		归还这个;
	}，

	toggleClass：function（value，stateVal）{
		var type = typeof value，
			isValidValue = type ===“string”|| Array.isArray（value）;

		if（typeof stateVal ===“boolean”&& isValidValue）{
			return stateVal？this.addClass（value）：this.removeClass（value）;
		}

		if（isFunction（value））{
			return this.each（function（i）{
				jQuery（this）.toggleClass（
					value.call（this，i，getClass（this），stateVal），
					stateVal
				）;
			}）;
		}

		return this.each（function（）{
			var className，i，self，classNames;

			if（isValidValue）{

				//切换单个类名
				i = 0;
				self = jQuery（this）;
				classNames = classesToArray（value）;

				while（（className = classNames [i ++]））{

					//检查给定的每个className，空格分隔列表
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get（this，“__ className__”）|| “”
					）;
				}
			}
		}）;
	}，

	hasClass：function（selector）{
		var className，elem，
			i = 0;

		className =“”+ selector +“”;
		while（（elem = this [i ++]））{
			if（elem.nodeType === 1 &&
				（“”+ stripAndCollapse（getClass（elem））+“”）。indexOf（className）> -1）{
					返回true;
			}
		}

		返回false;
	}
}）;




var rreturn = / \ r / g;

jQuery.fn.extend（{
	val：function（value）{
		var hooks，ret，valueIsFunction，
			elem = this [0];

		if（！arguments.length）{
			if（elem）{
				hooks = jQuery.valHooks [elem.type] ||
					jQuery.valHooks [elem.nodeName.toLowerCase（）];

				if（hooks &&
					钩子中的“get”&&
					（ret = hooks.get（elem，“value”））！== undefined
				）{
					返回;
				}

				ret = elem.value;

				//处理最常见的字符串案例
				if（typeof ret ===“string”）{
					return ret.replace（rreturn，“”）;
				}

				//处理value为null / undef或number的情况
				return ret == null？“”：ret;
			}

			返回;
		}

		valueIsFunction = isFunction（value）;

		return this.each（function（i）{
			var val;

			if（this.nodeType！== 1）{
				返回;
			}

			if（valueIsFunction）{
				val = value.call（this，i，jQuery（this）.val（））;
			} else {
				val =值;
			}

			//将null / undefined视为“”; 将数字转换为字符串
			if（val == null）{
				val =“”;

			} else if（typeof val ===“number”）{
				val + =“”;

			} else if（Array.isArray（val））{
				val = jQuery.map（val，function（value）{
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex，
					one = elem.type ===“select-one”，
					值=一？空值 ： []，
					最大=一？index + 1：options.length;

				if（index <0）{
					i = max;

				} else {
					我=一个？指数：0;
				}

				//遍历所有选定的选项
				for（; i <max; i ++）{
					option = options [i];

					//支持：IE <= 9
					//表单重置后IE8-9未更新（＃2551）
					if（（option.selected || i === index）&&

							//不返回已禁用的选项或禁用的optgroup中的选项
							！option.disabled &&
							（！option.parentNode.disabled ||
								！nodeName（option.parentNode，“optgroup”）））{

						//获取选项的特定值
						value = jQuery（option）.val（）;

						//我们不需要一个数组用于一个选择
						如果一个 ） {
							回报值;
						}

						// Multi-Selects返回一个数组
						values.push（value）;
					}
				}

				回报值;
			}，

			set：function（elem，value）{
				var optionSet，option，
					options = elem.options，
					values = jQuery.makeArray（value），
					i = options.length;

				当我 -  ） {
					option = options [i];

					/ * eslint-disable no-cond-assign * /

					if（option.selected =
						jQuery.inArray（jQuery.valHooks.option.get（option），values）> -1
					）{
						optionSet = true;
					}

					/ * eslint-enable no-cond-assign * /
				}

				//强制浏览器在设置非匹配值时表现一致
				if（！optionSet）{
					elem.selectedIndex = -1;
				}
				回报值;
			}
		}
	}
}）;

//无线电和复选框getter / setter
jQuery.each（[“radio”，“checkbox”]，function（）{
	jQuery.valHooks [this] = {
		set：function（elem，value）{
			if（Array.isArray（value））{
				return（elem.checked = jQuery.inArray（jQuery（elem）.val（），value）> -1）;
			}
		}
	};
	if（！support.checkOn）{
		jQuery.valHooks [this] .get = function（elem）{
			return elem.getAttribute（“value”）=== null？“on”：elem.value;
		};
	}
}）;




//返回jQuery以仅包含属性


support.focusin =“onfocusin”在窗口中;


var rfocusMorph = / ^（？：focusinfocus | focusoutblur）$ /，
	stopPropagationCallback = function（e）{
		e.stopPropagation（）;
	};

jQuery.extend（jQuery.event，{

	trigger：function（event，data，elem，onlyHandlers）{

		var i，cur，tmp，bubbleType，ontype，handle，special，lastElement，
			eventPath = [elem || 文件]，
			type = hasOwn.call（event，“type”）？event.type：event，
			namespaces = hasOwn.call（event，“namespace”）？event.namespace.split（“。”）：[];

		cur = lastElement = tmp = elem = elem || 文献;

		//不要在文本和注释节点上执行事件
		if（elem.nodeType === 3 || elem.nodeType === 8）{
			返回;
		}

		//聚焦/模糊变形到聚焦/聚焦; 确保我们现在不解雇它们
		if（rfocusMorph.test（type + jQuery.event.triggered））{
			返回;
		}

		if（type.indexOf（“。”）> -1）{

			//命名空间触发器; 创建一个regexp来匹配handle（）中的事件类型
			namespaces = type.split（“。”）;
			type = namespaces.shift（）;
			namespaces.sort（）;
		}
		ontype = type.indexOf（“：”）<0 &&“on”+ type;

		//调用者可以传入jQuery.Event对象，Object或只传递事件类型字符串
		event = event [jQuery.expando]？
			事件：
			new jQuery.Event（type，typeof event ===“object”&& event）;

		//触发位掩码：＆1表示本机处理程序; ＆2 for jQuery（总是如此）
		event.isTrigger = onlyHandlers？2：3;
		event.namespace = namespaces.join（“。”）;
		event.rnamespace = event.namespace？
			new RegExp（“（^ | \\。）”+ namespaces.join（“\\。（？：。* \\。|）”）+“（\\。| $）”）：
			空值;

		//清理事件以防重复使用
		event.result = undefined;
		if（！event.target）{
			event.target = elem;
		}

		//克隆任何传入的数据并在事件前添加，创建处理程序arg列表
		data = data == null？
			[事件]：
			jQuery.makeArray（data，[event]）;

		//允许特殊事件在线外绘制
		special = jQuery.event.special [type] || {};
		if（！onlyHandlers && special.trigger && special.trigger.apply（elem，data）=== false）{
			返回;
		}

		//根据W3C事件规范（＃9951）预先确定事件传播路径
		//冒泡到文件，然后到窗口; 注意全球所有者文档var（＃9724）
		if（！onlyHandlers &&！special.noBubble &&！isWindow（elem））{

			bubbleType = special.delegateType || 类型;
			if（！rfocusMorph.test（bubbleType + type））{
				cur = cur.parentNode;
			}
			for（; cur; cur = cur.parentNode）{
				eventPath.push（cur）;
				tmp = cur;
			}

			//如果我们需要文档（例如，不是普通的obj或分离的DOM），只添加窗口
			if（tmp ===（elem.ownerDocument || document））{
				eventPath.push（tmp.defaultView || tmp.parentWindow || window）;
			}
		}

		//事件路径上的消防处理程序
		i = 0;
		while（（cur = eventPath [i ++]）&&！event.isPropagationStopped（））{
			lastElement = cur;
			event.type = i> 1？
				bubbleType：
				special.bindType || 类型;

			// jQuery处理程序
			handle =（dataPriv.get（cur，“events”）|| {}）[event.type] &&
				dataPriv.get（cur，“handle”）;
			if（handle）{
				handle.apply（cur，data）;
			}

			//原生处理程序
			handle = ontype && cur [ontype];
			if（handle && handle.apply && acceptData（cur））{
				event.result = handle.apply（cur，data）;
				if（event.result === false）{
					event.preventDefault（）;
				}
			}
		}
		event.type = type;

		//如果没有人阻止默认操作，请立即执行
		if（！onlyHandlers &&！event.isDefaultPrevented（））{

			if（（！special._default ||
				special._default.apply（eventPath.pop（），data）=== false）&&
				acceptData（elem））{

				//在目标上调用与事件同名的本机DOM方法。
				//不要对窗口执行默认操作，这是全局变量的位置（＃6170）
				if（ontype && isFunction（elem [type]）&&！isWindow（elem））{

					//当我们调用它的FOO（）方法时，不要重新触发onFOO事件
					tmp = elem [ontype];

					if（tmp）{
						elem [ontype] = null;
					}

					//防止重新触发同一事件，因为我们已经在上面冒了它
					jQuery.event.triggered = type;

					if（event.isPropagationStopped（））{
						lastElement.addEventListener（type，stopPropagationCallback）;
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || 这个，
					attaches = dataPriv.access（doc，fix）;

				if（！attaches）{
					doc.addEventListener（orig，handler，true）;
				}
				dataPriv.access（doc，fix，（attaches || 0）+ 1）;
			}，
			拆解：function（）{
				var doc = this.ownerDocument || 这个，
					attaches = dataPriv.access（doc，fix） -  1;

				if（！attaches）{
					doc.removeEventListener（orig，handler，true）;
					dataPriv.remove（doc，fix）;

				} else {
					dataPriv.access（doc，fix，attaches）;
				}
			}
		};
	}）;
}
var location = window.location;

var nonce = Date.now（）;

var rquery =（/ \？/）;



//跨浏览器xml解析
jQuery.parseXML = function（data）{
	var xml;
	if（！data || typeof data！==“string”）{
		return null;
	}

	//支持：仅限IE 9  -  11
	// IE使用无效输入抛出parseFromString。
	尝试{
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					前缀+“[”+（typeof v ===“object”&& v！= null？i：“”）+“]”，
					五，
					传统的，
					加
				）;
			}
		}）;

	} else if（！traditional && toType（obj）===“object”）{

		//序列化对象项。
		for（obj中的名字）{
			buildParams（前缀+“[”+ name +“]”，obj [name]，繁体，添加）;
		}

	} else {

		//序列化标量项。
		add（prefix，obj）;
	}
}

//序列化一个表单元素数组或一组表单元素
//键/值到查询字符串中
jQuery.param = function（a，traditional）{
	var前缀，
		s = []，
		add = function（key，valueOrFunction）{

			//如果value是一个函数，则调用它并使用其返回值
			var value = isFunction（valueOrFunction）？
				valueOrFunction（）：
				valueOrFunction;

			s [s.length] = encodeURIComponent（key）+“=”+
				encodeURIComponent（value == null？“”：value）;
		};

	//如果传入了一个数组，则假定它是一个表单元素数组。
	if（Array.isArray（a）||（a.jquery &&！jQuery.isPlainObject（a）））{

		//序列化表单元素
		jQuery.each（a，function（）{
			add（this.name，this.value）;
		}）;

	} else {

		//如果是传统方式，则编码“旧”方式（1.3.2或更旧的方式）
		//做了它，否则递归编码params。
		for（a中的前缀）{
			buildParams（前缀，[前缀]，繁体，添加）;
		}
	}

	//返回结果序列化
	return s.join（“＆”）;
};

jQuery.fn.extend（{
	serialize：function（）{
		return jQuery.param（this.serializeArray（））;
	}，
	serializeArray：function（）{
		return this.map（function（）{

			//可以为“元素”添加propHook来过滤或添加表单元素
			var elements = jQuery.prop（this，“elements”）;
			返回元素？jQuery.makeArray（elements）：this;
		}）
		.filter（function（）{
			var type = this.type;

			//使用.is（“：disabled”）以便fieldset [disabled]起作用
			return this.name &&！jQuery（this）.is（“：disabled”）&&
				rsubmittable.test（this.nodeName）&&！rsubmitterTypes.test（type）&&
				（this.checked ||！rcheckableType.test（type））;
		}）
		.map（function（i，elem）{
			var val = jQuery（this）.val（）;

			if（val == null）{
				return null;
			}

			if（Array.isArray（val））{
				return jQuery.map（val，function（val）{
					return {name：elem.name，value：val.replace（rCRLF，“\ r \ n”）};
				}）;
			}

			return {name：elem.name，value：val.replace（rCRLF，“\ r \ n”）};
		}）.get（）;
	}
}）;


VAR
	r20 = /％20 / g，
	rhash = /#.*$/,
	rantiCache = /（[？＆]）_ = [^＆] * /，
	rheaders = / ^（。*？）：[\ t] *（[^ \ r \ n] *）$ / mg，

	//＃7653，＃8125，＃8152：本地协议检测
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res | widget）：$ /，
	rnoContent = / ^（？：GET | HEAD）$ /，
	rprotocol = / ^ \ / \ //，

	/ *预过滤器
	 * 1）它们对于引入自定义数据类型很有用（有关示例，请参阅ajax / jsonp.js）
	 * 2）这些被称为：
	 *  - 在要求运输之前
	 *  - 参数序列化后（如果s.processData为true，则s.data为字符串）
	 * 3）key是dataType
	 * 4）可以使用catchall符号“*”
	 * 5）执行将以transport dataType开始，然后如果需要则继续向下“*”
	 * /
	prefilters = {}，

	/ *传输绑定
	 * 1）key是dataType
	 * 2）可以使用catchall符号“*”
	 * 3）选择将以transport dataType开始，然后如果需要则转到“*”
	 * /
	transports = {}，

	//避免使用comment-prolog char序列（＃10098）; 必须安抚棉绒并逃避压迫
	allTypes =“* /”。concat（“*”），

	//用于解析文档原点的锚标记
	originAnchor = document.createElement（“a”）;
	originAnchor.href = location.href;

// jQuery.ajaxPrefilter和jQuery.ajaxTransport的基础“构造函数”
function addToPrefiltersOrTransports（structure）{

	// dataTypeExpression是可选的，默认为“*”
	return函数（dataTypeExpression，func）{

		if（typeof dataTypeExpression！==“string”）{
			func = dataTypeExpression;
			dataTypeExpression =“*”;
		}

		var dataType，
			i = 0，
			dataTypes = dataTypeExpression.toLowerCase（）。match（rnothtmlwhite）|| [];

		if（isFunction（func））{

			//对于dataTypeExpression中的每个dataType
			while（（dataType = dataTypes [i ++]））{

				//如果请求前置
				if（dataType [0] ===“+”）{
					dataType = dataType.slice（1）|| “*”;
					（structure [dataType] = structure [dataType] || []）。unshift（func）;

				//否则追加
				} else {
					（structure [dataType] = structure [dataType] || []）。push（func）;
				}
			}
		}
	};
}

//预滤器和运输的基本检查功能
function inspectPrefiltersOrTransports（structure，options，originalOptions，jqXHR）{

	var检查= {}，
		seekingTransport =（结构===运输）;

	function inspect（dataType）{
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for（key in src）{
		if（src [key]！== undefined）{
			（flatOptions [key]？target :( deep ||（deep = {}）））[key] = src [key];
		}
	}
	if（deep）{
		jQuery.extend（true，target，deep）;
	}

	回归目标;
}

/ *处理对ajax请求的响应：
 *  - 找到正确的dataType（介于内容类型和预期的dataType之间）
 *  - 返回相应的响应
 * /
function ajaxHandleResponses（s，jqXHR，responses）{

	var ct，type，finalDataType，firstDataType，
		contents = s.contents，
		dataTypes = s.dataTypes;

	//删除auto dataType并在流程中获取内容类型
	while（dataTypes [0] ===“*”）{
		dataTypes.shift（）;
		if（ct === undefined）{
			ct = s.mimeType || jqXHR.getResponseHeader（“Content-Type”）;
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift（finalDataType）;
		}
		返回响应[finalDataType];
	}
}

/ *给出请求和原始响应的链转换
 *还设置jqXHR实例上的responseXXX字段
 * /
function ajaxConvert（s，response，jqXHR，isSuccess）{
	var conv2，current，conv，tmp，prev，
		converters = {}，

		//使用dataTypes的副本，以防我们需要修改它以进行转换
		dataTypes = s.dataTypes.slice（）;

	//使用小写键创建转换器映射
	if（dataTypes [1]）{
		for（conv in s.converters）{
			converter [conv.toLowerCase（）] = s.converters [conv];
		}
	}

	current = dataTypes.shift（）;

	//转换为每个顺序数据类型
	而（当前）{

		if（s.responseFields [current]）{
			jqXHR [s.responseFields [current]] =响应;
		}

		//如果提供，请应用dataFilter
		if（！prev && isSuccess && s.dataFilter）{
			response = s.dataFilter（response，s.dataType）;
		}

		prev =当前;
		current = dataTypes.shift（）;

		if（current）{

			//如果当前的dataType是非自动的，那么只有工作要做
			if（current ===“*”）{

				current = prev;

			//如果prev dataType为非auto且与当前不同，则转换响应
			} else if（prev！==“*”&& prev！== current）{

				//寻求直接转换器
				conv = converter [prev +“”+ current] || converter [“*”+ current];

				//如果没有找到，请寻找一对
				if（！conv）{
					for（转换器中的conv2）{

						//如果conv2输出电流
						tmp = conv2.split（“”）;
						if（tmp [1] === current）{

							//如果prev可以转换为接受的输入
							conv = converter [prev +“”+ tmp [0]] ||
								converter [“*”+ tmp [0]];
							if（conv）{

								//压缩等价转换器
								if（conv === true）{
									conv = converters [conv2];

								//否则，插入中间数据类型
								} else if（converters [conv2]！== true）{
									current = tmp [0];
									dataTypes.unshift（tmp [1]）;
								}
								打破;
							}
						}
					}
				}

				//应用转换器（如果不是等价）
				if（conv！== true）{

					//除非允许错误冒泡，否则捕获并返回它们
					if（conv && s.throws）{
						response = conv（响应）;
					} else {
						尝试{
							response = conv（响应）;
						} catch（e）{
							返回{
								州：“parsererror”，
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html：“text / html”，
			xml：“application / xml，text / xml”，
			json：“application / json，text / javascript”
		}，

		内容：{
			xml：/ \ bxml \ b /，
			html：/ \ bhtml /，
			json：/ \ bjson \ b /
		}，

		responseFields：{
			xml：“responseXML”，
			text：“responseText”，
			json：“responseJSON”
		}，

		//数据转换器
		//使用单个空格键分隔源（或catchall“*”）和目标类型
		转换器：{

			//将任何内容转换为文本
			“* text”：字符串，

			//文本到html（true =无转换）
			“text html”：是的，

			//将文本评估为json表达式
			“text json”：JSON.parse，

			//将文本解析为xml
			“text xml”：jQuery.parseXML
		}，

		//对于不应深度扩展的选项：
		//如果你可以在这里添加自己的自定义选项
		//当你创建一个不应该的
		//深度扩展（参见ajaxExtend）
		flatOptions：{
			url：是的，
			上下文：是的
		}
	}，

	//将完整的成熟设置对象创建到目标中
	//同时包含ajaxSettings和设置字段。
	//如果省略target，则写入ajaxSettings。
	ajaxSetup：function（target，settings）{
		返回设置？

			//构建设置对象
			ajaxExtend（ajaxExtend（target，jQuery.ajaxSettings），settings）：

			//扩展ajaxSettings
			ajaxExtend（jQuery.ajaxSettings，target）;
	}，

	ajaxPrefilter：addToPrefiltersOrTransports（prefilters），
	ajaxTransport：addToPrefiltersOrTransports（transports），

	//主要方法
	ajax：function（url，options）{

		//如果url是一个对象，则模拟1.5之前的签名
		if（typeof url ===“object”）{
			options = url;
			url = undefined;
		}

		//强制选项成为对象
		options = options || {};

		var运输，

			//没有反缓存参数的URL
			cacheURL，

			//响应标头
			responseHeadersString，
			responseHeaders响应，

			//超时句柄
			timeoutTimer，

			// Url cleanup var
			urlAnchor，

			//请求状态（发送时变为false，完成后变为true）
			完成后，

			//知道是否要调度全局事件
			fireGlobals，

			//循环变量
			一世，

			//未缓存的网址部分
			未缓存，

			//创建最终选项对象
			s = jQuery.ajaxSetup（{}，options），

			//回调上下文
			callbackContext = s.context || S，

			//全局事件的上下文是callbackContext，如果它是DOM节点或jQuery集合
			globalEventContext = s.context &&
				（callbackContext.nodeType || callbackContext.jquery）？
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for（地图中的代码）{
								statusCode [code] = [statusCode [code]，map [code]];
							}
						}
					}
					归还这个;
				}，

				//取消请求
				abort：function（statusText）{
					var finalText = statusText || strAbort;
					if（transport）{
						transport.abort（finalText）;
					}
					完成（0，finalText）;
					归还这个;
				}
			};

		//附加延迟
		deferred.promise（jqXHR）;

		//如果没有提供协议（预过滤器可能会期望它）
		//在设置对象中处理错误的URL（＃10093：与旧签名的一致性）
		//我们还使用url参数（如果可用）
		s.url =（（url || s.url || location.href）+“”）
			.replace（rprotocol，location.protocol +“//”）;

		//根据票证＃12004键入的别名方法选项
		s.type = options.method || options.type || s.method || s.type;

		//提取dataTypes列表
		s.dataTypes =（s.dataType ||“*”）。toLowerCase（）。match（rnothtmlwhite）|| [“”];

		//当原点与当前原点不匹配时，跨域请求是有序的。
		if（s.crossDomain == null）{
			urlAnchor = document.createElement（“a”）;

			//支持：IE <= 8  -  11，边缘12  -  15
			//如果url格式错误，IE会在访问href属性时抛出异常，
			//例如http://example.com:80x/
			尝试{
				urlAnchor.href = s.url;

				//支持：IE <= 8  -  11
				//当s.url是相对的时，未正确设置Anchor的主机属性
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol +“//”+ originAnchor.host！==
					urlAnchor.protocol +“//”+ urlAnchor.host;
			} catch（e）{

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger（“ajaxStart”）;
		}

		//大写类型
		s.type = s.type.toUpperCase（）;

		//确定请求是否包含内容
		s.hasContent =！rnoContent.test（s.type）;

		//保存URL，以防我们使用If-Modified-Since进行操作
		//和/或If-None-Match标题稍后
		//删除哈希以简化网址操作
		cacheURL = s.url.replace（rhash，“”）;

		//更多选项处理没有内容的请求
		if（！s.hasContent）{

			//记住哈希，以便我们可以把它放回去
			uncached = s.url.slice（cacheURL.length）;

			//如果数据可用且应该处理，请将数据附加到url
			if（s.data &&（s.processData || typeof s.data ===“string”））{
				cacheURL + =（rquery.test（cacheURL）？“＆”：“？”）+ s.data;

				//＃9682：删除数据，以便在最终重试时不使用它
				删除s.data;
			}

			//如果需要，添加或更新反缓存参数
			if（s.cache === false）{
				cacheURL = cacheURL.replace（rantiCache，“$ 1”）;
				uncached =（rquery.test（cacheURL）？“＆”：“？”）+“_ =”+（nonce ++）+ uncached;
			}

			//将哈希和反缓存放在要请求的URL上（gh-1732）
			s.url = cacheURL + uncached;

		//如果这是从正文内容编码，则将'％20'更改为'+'（gh-2658）
		} else if（s.data && s.processData &&
			（s.contentType ||“”）。indexOf（“application / x-www-form-urlencoded”）=== 0）{
			s.data = s.data.replace（r20，“+”）;
		}

		//如果处于ifModified模式，则设置If-Modified-Since和/或If-None-Match标头。
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts [“*”]
		）;

		//检查标题选项
		for（i in s.headers）{
			jqXHR.setRequestHeader（i，s.headers [i]）;
		}

		//允许自定义标头/ mimetypes并提前中止
		if（s.beforeSend &&
			（s.beforeSend.call（callbackContext，jqXHR，s）=== false || completed））{

			//如果没有完成则中止并返回
			return jqXHR.abort（）;
		}

		//中止不再是取消
		strAbort =“abort”;

		//在延迟上安装回调
		completeDeferred.add（s.complete）;
		jqXHR.done（s.success）;
		jqXHR.fail（s.error）;

		//获取运输
		transport = inspectPrefiltersOrTransports（transports，s，options，jqXHR）;

		//如果没有运输，我们自动中止
		if（！transport）{
			完成（-1，“无运输”）;
		} else {
			jqXHR.readyState = 1;

			//发送全局事件
			if（fireGlobals）{
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			//如果存在则清除超时
			if（timeoutTimer）{
				window.clearTimeout（timeoutTimer）;
			}

			//用于早期垃圾收集的取消引用传输
			//（无论jqXHR对象使用多长时间）
			transport = undefined;

			//缓存响应头
			responseHeadersString = headers || “”;

			//设置readyState
			jqXHR.readyState = status> 0？4：0;

			//确定是否成功
			isSuccess = status> = 200 && status <300 || 状态=== 304;

			//获取响应数据
			if（回复）{
				response = ajaxHandleResponses（s，jqXHR，response）;
			}

			//转换无论什么（总是设置responseXXX字段）
			response = ajaxConvert（s，response，jqXHR，isSuccess）;

			//如果成功，请处理类型链接
			if（isSuccess）{

				//如果处于ifModified模式，则设置If-Modified-Since和/或If-None-Match标头。
				if（s.ifModified）{
					modified = jqXHR.getResponseHeader（“Last-Modified”）;
					if（modified）{
						jQuery.lastModified [cacheURL] = modified;
					}
					modified = jqXHR.getResponseHeader（“etag”）;
					if（modified）{
						jQuery.etag [cacheURL] =已修改;
					}
				}

				//如果没有内容
				if（status === 204 || s.type ===“HEAD”）{
					statusText =“nocontent”;

				//如果没有修改
				} else if（status === 304）{
					statusText =“notmodified”;

				//如果我们有数据，让我们转换它
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess =！error;
				}
			} else {

				//从statusText中提取错误并针对非中止进行规范化
				error = statusText;
				if（status ||！statusText）{
					statusText =“错误”;
					if（status <0）{
						status = 0;
					}
				}
			}

			//设置假xhr对象的数据
			jqXHR.status = status;
			jqXHR.statusText =（nativeStatusText || statusText）+“”;

			//成功/错误
			if（isSuccess）{
				deferred.resolveWith（callbackContext，[success，statusText，jqXHR]）;
			} else {
				deferred.rejectWith（callbackContext，[jqXHR，statusText，error]）;
			}

			//依赖于状态的回调
			jqXHR.statusCode（statusCode）;
			statusCode = undefined;

			if（fireGlobals）{
				globalEventContext.trigger（isSuccess？“ajaxSuccess”：“ajaxError”，
					[jqXHR，s，是成功吗？成功：错误]）;
			}

			//完成
			completeDeferred.fireWith（callbackContext，[jqXHR，statusText]）;

			if（fireGlobals）{
				globalEventContext.trigger（“ajaxComplete”，[jqXHR，s]）;

				//处理全局AJAX计数器
				if（！（ -  jQuery.active））{
					jQuery.event.trigger（“ajaxStop”）;
				}
			}
		}

		返回jqXHR;
	}，

	getJSON：function（url，data，callback）{
		return jQuery.get（url，data，callback，“json”）;
	}，

	getScript：function（url，callback）{
		return jQuery.get（url，undefined，callback，“script”）;
	}
}）;

jQuery.each（[“get”，“post”]，function（i，method）{
	jQuery [method] = function（url，data，callback，type）{

		//如果省略data参数，则移位参数
		if（isFunction（data））{
			type = type || 打回来;
			callback = data;
			data = undefined;
		}

		// url可以是一个options对象（然后必须有.url）
		return jQuery.ajax（jQuery.extend（{
			url：url，
			类型：方法，
			dataType：type，
			数据：数据，
			成功：回调
		}，jQuery.isPlainObject（url）&& url））;
	};
}）;


jQuery._evalUrl = function（url）{
	return jQuery.ajax（{
		url：url，

		//明确这一点，因为用户可以通过ajaxSetup覆盖它（＃11264）
		类型：“GET”，
		dataType：“script”，
		cache：true，
		async：false，
		全球：假的，
		“抛出”：是的
	}）;
};


jQuery.fn.extend（{
	wrapAll：function（html）{
		var wrap;

		if（this [0]）{
			if（isFunction（html））{
				html = html.call（this [0]）;
			}

			//包围目标的元素
			wrap = jQuery（html，this [0] .ownerDocument）.eq（0）.clone（true）;

			if（this [0] .parentNode）{
				wrap.insertBefore（this [0]）;
			}

			wrap.map（function（）{
				var elem = this;

				while（elem.firstElementChild）{
					elem = elem.firstElementChild;
				}

				返回元素;
			}）.append（this）;
		}

		归还这个;
	}，

	wrapInner：function（html）{
		if（isFunction（html））{
			return this.each（function（i）{
				jQuery（this）.wrapInner（html.call（this，i））;
			}）;
		}

		return this.each（function（）{
			var self = jQuery（this），
				contents = self.contents（）;

			if（contents.length）{
				contents.wrapAll（html）;

			} else {
				self.append（html）;
			}
		}）;
	}，

	wrap：function（html）{
		var htmlIsFunction = isFunction（html）;

		return this.each（function（i）{
			jQuery（this）.wrapAll（htmlIsFunction？html.call（this，i）：html）;
		}）;
	}，

	unwrap：function（selector）{
		this.parent（selector）.not（“body”）.each（function（）{
			jQuery（this）.replaceWith（this.childNodes）;
		}）;
		归还这个;
	}
}）;


jQuery.expr.pseudos.hidden = function（elem）{
	return！jQuery.expr.pseudos.visible（elem）;
};
jQuery.expr.pseudos.visible = function（elem）{
	return !!（elem.offsetWidth || elem.offsetHeight || elem.getClientRects（）。length）;
};




jQuery.ajaxSettings.xhr = function（）{
	尝试{
		return new window.XMLHttpRequest（）;
	} catch（e）{}
};

var xhrSuccessStatus = {

		//文件协议总是产生状态码0，假设为200
		0：200，

		//支持：IE <= 9
		//＃1450：有时IE返回1223，应该是204
		1223：204
	}，
	xhrSupported = jQuery.ajaxSettings.xhr（）;

support.cors = !! xhrSupported &&（xhrSupported中的“withCredentials”）;
support.ajax = xhrSupported = !! xhrSupported;

jQuery.ajaxTransport（function（options）{
	var callback，errorCallback;

	//只有在通过XMLHttpRequest支持时才允许跨域
	if（support.cors || xhrSupported &&！options.crossDomain）{
		返回{
			send：function（headers，complete）{
				var i，
					xhr = options.xhr（）;

				xhr.open（
					options.type，
					options.url，
					options.async，
					options.username，
					options.password
				）;

				//如果提供，则应用自定义字段
				if（options.xhrFields）{
					for（i in options.xhrFields）{
						xhr [i] = options.xhrFields [i];
					}
				}

				//如果需要，覆盖mime类型
				if（options.mimeType && xhr.overrideMimeType）{
					xhr.overrideMimeType（options.mimeType）;
				}

				// X-Requested-With标题
				//对于跨域请求，视为预检的条件
				//类似于拼图游戏，我们根本就没有把它确定下来。
				//（它总是可以基于每个请求设置，甚至可以使用ajaxSetup设置）
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback（“abort”）;

				尝试{

					//发送请求（这可能引发异常）
					xhr.send（options.hasContent && options.data || null）;
				} catch（e）{

					//＃14683：如果尚未将此通知为错误，则仅重新抛出
					if（callback）{
						扔掉;
					}
				}
			}，

			abort：function（）{
				if（callback）{
					打回来（）;
				}
			}
		};
	}
}）;




//当没有提供显式数据类型时，防止脚本自动执行（参见gh-2432）
jQuery.ajaxPrefilter（function（s）{
	if（s.crossDomain）{
		s.contents.script = false;
	}
}）;

//安装脚本dataType
jQuery.ajaxSetup（{
	接受：{
		脚本：“text / javascript，application / javascript，”+
			“application / ecmascript，application / x-ecmascript”
	}，
	内容：{
		脚本：/ \ b（？：java | ecma）脚本\ b /
	}，
	转换器：{
		“text script”：function（text）{
			jQuery.globalEval（text）;
			返回文字;
		}
	}
}）;

//处理缓存的特殊情况和crossDomain
jQuery.ajaxPrefilter（“script”，function（s）{
	if（s.cache === undefined）{
		s.cache = false;
	}
	if（s.crossDomain）{
		s.type =“GET”;
	}
}）;

//绑定脚本标记黑客传输
jQuery.ajaxTransport（“script”，function（s）{

	//此传输仅处理跨域请求
	if（s.crossDomain）{
		var脚本，回调;
		返回{
			send：function（_，complete）{
				script = jQuery（“<script>”）。prop（{
					charset：s.scriptCharset，
					src：s.url
				} ）。上（
					“加载错误”，
					callback = function（evt）{
						script.remove（）;
						callback = null;
						if（evt）{
							完成（evt.type ===“error”？404：200，evt.type）;
						}
					}
				）;

				//使用原生DOM操作来避免我们的domManip AJAX欺骗
				document.head.appendChild（script [0]）;
			}，
			abort：function（）{
				if（callback）{
					打回来（）;
				}
			}
		};
	}
}）;




var oldCallbacks = []，
	rjsonp = /（=）\？（？=＆| $）| \？\？/;

//默认的jsonp设置
jQuery.ajaxSetup（{
	jsonp：“回调”，
	jsonpCallback：function（）{
		var callback = oldCallbacks.pop（）|| （jQuery.expando +“_”+（nonce ++））;
		这[callback] = true;
		返回回调;
	}
}）;

//检测，规范化选项并为jsonp请求安装回调
jQuery.ajaxPrefilter（“json jsonp”，function（s，originalSettings，jqXHR）{

	var callbackName，overwritten，responseContainer，
		jsonProp = s.jsonp！== false &&（rjsonp.test（s.url）？
			“网址”：
			typeof s.data ===“string”&&
				（s.contentType ||“”）
					.indexOf（“application / x-www-form-urlencoded”）=== 0 &&
				rjsonp.test（s.data）&&“data”
		）;

	//如果预期的数据类型是“jsonp”，或者我们有一个要设置的参数，请处理
	if（jsonProp || s.dataTypes [0] ===“jsonp”）{

		//获取回调名称，记住与之关联的预先存在的值
		callbackName = s.jsonpCallback = isFunction（s.jsonpCallback）？
			s.jsonpCallback（）：
			s.jsonpCallback;

		//将回调插入到url或表单数据中
		if（jsonProp）{
			s [jsonProp] = s [jsonProp] .replace（rjsonp，“$ 1”+ callbackName）;
		} else if（s.jsonp！== false）{
			s.url + =（rquery.test（s.url）？“＆”：“？”）+ s.jsonp +“=”+ callbackName;
		}

		//在脚本执行后使用数据转换器检索json
		s.converters [“script json”] = function（）{
			if（！responseContainer）{
				jQuery.error（callbackName +“未被调用”）;
			}
			return responseContainer [0];
		};

		//强制json dataType
		s.dataTypes [0] =“json”;

		//安装回调
		overwritten = window [callbackName];
		window [callbackName] = function（）{
			responseContainer = arguments;
		};

		//清理功能（转换器后触发）
		jqXHR.always（function（）{

			//如果以前的值不存在 - 将其删除
			if（覆盖=== undefined）{
				jQuery（window）.removeProp（callbackName）;

			//否则恢复预先存在的值
			} else {
				window [callbackName] =覆盖;
			}

			//保存为免费
			if（s [callbackName]）{

				//确保重新使用这些选项并不会使事情变得棘手
				s.jsonpCallback = originalSettings.jsonpCallback;

				//保存回调名称以备将来使用
				oldCallbacks.push（callbackName）;
			}

			//如果它是一个函数则调用，我们有一个响应
			if（responseContainer && isFunction（覆盖））{
				覆盖（responseContainer [0]）;
			}

			responseContainer = overwritten = undefined;
		}）;

		//委派给脚本
		返回“脚本”;
	}
}）;




//支持：仅限Safari 8
//在Safari 8中通过document.implementation.createHTMLDocument创建的文档
//折叠兄弟形式：第二个成为第一个的孩子。
//因此，必须在Safari 8中禁用此安全措施。
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument =（function（）{
	var body = document.implementation.createHTMLDocument（“”）.body;
	body.innerHTML =“<form> </ form> <form> </ form>”;
	return body.childNodes.length === 2;
}）（）;


//参数“data”应该是html的字符串
// context（可选）：如果指定，将在此上下文中创建片段，
//默认为文档
// keepScripts（可选）：如果为true，将包含在html字符串中传递的脚本
jQuery.parseHTML = function（data，context，keepScripts）{
	if（typeof data！==“string”）{
		return [];
	}
	if（typeof context ===“boolean”）{
		keepScripts = context;
		context = false;
	}

	var base，parsed，scripts;

	if（！context）{

		//停止脚本或内联事件处理程序立即执行
		//通过使用document.implementation
		if（support.createHTMLDocument）{
			context = document.implementation.createHTMLDocument（“”）;

			//为创建的文档设置基本href
			//所以任何带URL的解析元素
			//基于文档的URL（gh-2965）
			base = context.createElement（“base”）;
			base.href = document.location.href;
			context.head.appendChild（base）;
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec（data）;
	scripts =！keepScripts && [];

	//单个标签
	if（已解析）{
		return [context.createElement（parsed [1]）];
	}

	parsed = buildFragment（[data]，context，scripts）;

	if（scripts && scripts.length）{
		jQuery（脚本）.remove（）;
	}

	return jQuery.merge（[]，parsed.childNodes）;
};


/ **
 *将网址加载到页面中
 * /
jQuery.fn.load = function（url，params，callback）{
	var选择器，类型，响应，
		自我=这个，
		off = url.indexOf（“”）;

	if（off> -1）{
		selector = stripAndCollapse（url.slice（off））;
		url = url.slice（0，off）;
	}

	//如果它是一个功能
	if（isFunction（params））{

		//我们假设这是回调
		callback = params;
		params = undefined;

	//否则，构建一个参数字符串
	} else if（params && typeof params ===“object”）{
		type =“POST”;
	}

	//如果我们要修改元素，请发出请求
	if（self.length> 0）{
		jQuery.ajax（{
			url：url，

			//如果未定义“type”变量，则使用“GET”方法。
			//从而明确显示此字段的值
			//用户可以通过ajaxSetup方法覆盖它
			类型：类型|| “得到”，
			dataType：“html”，
			数据：params
		} .done（function（responseText）{

			//保存响应以用于完整回调
			response = arguments;

			self.html（选择器？

				//如果指定了选择器，则在虚拟div中找到正确的元素
				//排除脚本以避免IE'权限被拒绝'错误
				jQuery（“<div>”）。append（jQuery.parseHTML（responseText））。find（selector）：

				//否则使用完整的结果
				responseText）;

		//如果请求成功，此函数将获得“data”，“status”，“jqXHR”
		//但是它们会被忽略，因为上面设置了响应。
		//如果失败，此函数将获得“jqXHR”，“status”，“error”
		} .always（callback && function（jqXHR，status）{
			self.each（function（）{
				callback.apply（this，response || [jqXHR.responseText，status，jqXHR]）;
			}）;
		}）;
	}

	归还这个;
};




//附加一堆函数来处理常见的AJAX事件
jQuery.each（[
	“ajaxStart”
	“ajaxStop”
	“ajaxComplete”
	“ajaxError”
	“的ajaxSuccess”
	“ajaxSend”
]，function（i，type）{
	jQuery.fn [type] = function（fn）{
		return this.on（type，fn）;
	};
}）;




jQuery.expr.pseudos.animated = function（elem）{
	return jQuery.grep（jQuery.timers，function（fn）{
		return elem === fn.elem;
	} ）。长度;
};




jQuery.offset = {
	setOffset：function（elem，options，i）{
		var curPosition，curLeft，curCSSTop，curTop，curOffset，curCSSLeft，calculatePosition，
			position = jQuery.css（elem，“position”），
			curElem = jQuery（elem），
			props = {};

		//首先设置位置，即使在静态elem上也设置了in-top top / left
		if（position ===“static”）{
			elem.style.position =“亲戚”;
		}

		curOffset = curElem.offset（）;
		curCSSTop = jQuery.css（elem，“top”）;
		curCSSLeft = jQuery.css（elem，“left”）;
		calculatePosition =（位置===“绝对”||位置===“固定”）&&
			（curCSSTop + curCSSLeft）.indexOf（“auto”）> -1;

		//如果有的话，需要能够计算位置
		//顶部或左侧是自动，位置是绝对的或固定的
		if（calculatePosition）{
			curPosition = curElem.position（）;
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat（curCSSTop）|| 0;
			curLeft = parseFloat（curCSSLeft）|| 0;
		}

		if（isFunction（options））{

			//在这里使用jQuery.extend来修改坐标参数（gh-1848）
			options = options.call（elem，i，jQuery.extend（{}，curOffset））;
		}

		if（options.top！= null）{
			props.top =（options.top  -  curOffset.top）+ curTop;
		}
		if（options.left！= null）{
			props.left =（options.left  -  curOffset.left）+ curLeft;
		}

		if（选项中“使用”）{
			options.using.call（elem，props）;

		} else {
			curElem.css（道具）;
		}
	}
};

jQuery.fn.extend（{

	// offset（）将元素的边框与文档原点相关联
	offset：function（options）{

		//为seter保留链接
		if（arguments.length）{
			返回选项=== undefined？
				这个 ：
				this.each（function（i）{
					jQuery.offset.setOffset（this，options，i）;
				}）;
		}

		var rect，win，
			elem = this [0];

		if（！elem）{
			返回;
		}

		//为断开连接和隐藏（display：none）元素返回零（gh-2310）
		//支持：IE <= 11
		//在a上运行getBoundingClientRect
		// IE中断开连接的节点会抛出错误
		if（！elem.getClientRects（）。length）{
			return {top：0，left：0};
		}

		//通过向视口相对gBCR添加视口滚动来获取文档相对位置
		rect = elem.getBoundingClientRect（）;
		win = elem.ownerDocument.defaultView;
		返回{
			顶部：rect.top + win.pageYOffset，
			left：rect.left + win.pageXOffset
		};
	}，

	// position（）将元素的边距框与其偏移父元素的填充框相关联
	//这对应于CSS绝对定位的行为
	position：function（）{
		if（！this [0]）{
			返回;
		}

		var offsetParent，offset，doc，
			elem = this [0]，
			parentOffset = {top：0，left：0};

		// position：固定元素从视口偏移，视口本身始终具有零偏移
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				//将边框合并到其偏移中，因为它们位于其内容原点之外
				parentOffset = jQuery（offsetParent）.offset（）;
				parentOffset.top + = jQuery.css（offsetParent，“borderTopWidth”，true）;
				parentOffset.left + = jQuery.css（offsetParent，“borderLeftWidth”，true）;
			}
		}

		//减去父偏移和元素边距
		返回{
			top：offset.top  -  parentOffset.top  -  jQuery.css（elem，“marginTop”，true），
			left：offset.left  -  parentOffset.left  -  jQuery.css（elem，“marginLeft”，true）
		};
	}，

	//在以下情况下，此方法将返回documentElement：
	// 1）对于没有offsetParent的iframe内的元素，此方法将返回
	//父窗口的documentElement
	// 2）对于隐藏或分离的元素
	// 3）对于body或html元素，即在html节点的情况下 - 它将返回自身
	//
	//但这些例外从未作为现实生活用例呈现
	//可能被认为是更优选的结果。
	//
	//然而，这种逻辑不能保证，并且可以在将来的任何时候改变
	offsetParent：function（）{
		return this.map（function（）{
			var offsetParent = this.offsetParent;

			while（offsetParent && jQuery.css（offsetParent，“position”）===“static”）{
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		}）;
	}
}）;

//创建scrollLeft和scrollTop方法
jQuery.each（{scrollLeft：“pageXOffset”，scrollTop：“pageYOffset”}，function（method，prop）{
	var top =“pageYOffset”=== prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
//而不是让css模块依赖于偏移模块，只需在这里检查它
jQuery.each（[“top”，“left”]，function（i，prop）{
	jQuery.cssHooks [prop] = addGetHookIf（support.pixelPosition，
		function（elem，calculated）{
			if（computed）{
				computed = curCSS（elem，prop）;

				//如果curCSS返回百分比，则回退到偏移量
				return rnumnonpx.test（computed）？
					jQuery（elem）.position（）[prop] +“px”：
					计算;
			}
		}
	）;
}）;


//创建innerHeight，innerWidth，height，width，outerHeight和outerWidth方法
jQuery.each（{Height：“height”，Width：“width”}，function（name，type）{
	jQuery.each（{padding：“inner”+ name，content：type，“”：“outer”+ name}，
		function（defaultExtra，funcName）{

		//边距仅适用于outerHeight，outerWidth
		jQuery.fn [funcName] = function（margin，value）{
			var chainable = arguments.length &&（defaultExtra || typeof margin！==“boolean”），
				extra = defaultExtra || （margin === true || value === true？“margin”：“border”）;

			return access（this，function（elem，type，value）{
				var doc;

				if（isWindow（elem））{

					// $（窗口）.outerWidth /高度返回w / h包括滚动条（gh-1729）
					return funcName.indexOf（“outer”）=== 0？
						elem [“内部”+名称]：
						elem.document.documentElement [“client”+ name];
				}

				//获取文档宽度或高度
				if（elem.nodeType === 9）{
					doc = elem.documentElement;

					//滚动[宽度/高度]或偏移[宽度/高度]或客户端[宽度/高度]，
					//无论哪个最好
					返回Math.max（
						elem.body [“scroll”+ name]，doc [“scroll”+ name]，
						elem.body [“offset”+ name]，doc [“offset”+ name]，
						doc [“客户”+名称]
					）;
				}

				返回值=== undefined？

					//获取元素的宽度或高度，请求但不强制parseFloat
					jQuery.css（elem，type，extra）：

					//在元素上设置宽度或高度
					jQuery.style（elem，type，value，extra）;
			，类型，可链接？保证金：未定义，可链接）;
		};
	}）;
}）;


jQuery.each（（“blur focus focusin focusout resize scroll click dblclick”+
	“mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave”+
	“更改选择提交keydown keypress keyup contextmenu”）。split（“”），
	function（i，name）{

	//处理事件绑定
	jQuery.fn [name] = function（data，fn）{
		return arguments.length> 0？
			this.on（name，null，data，fn）：
			this.trigger（名字）;
	};
}）;

jQuery.fn.extend（{
	hover：function（fnOver，fnOut）{
		return this.mouseenter（fnOver）.mouseleave（fnOut || fnOver）;
	}
}）;




jQuery.fn.extend（{

	bind：function（types，data，fn）{
		return this.on（types，null，data，fn）;
	}，
	unbind：function（types，fn）{
		return this.off（types，null，fn）;
	}，

	delegate：function（selector，types，data，fn）{
		return this.on（types，selector，data，fn）;
	}，
	undelegate：function（selector，types，fn）{

		//（名称空间）或（selector，types [，fn]）
		return arguments.length === 1？
			this.off（选择器，“**”）：
			this.off（types，selector ||“**”，fn）;
	}
}）;

//将函数绑定到上下文，可选择部分应用任何函数
//参数
//不推荐使用jQuery.proxy来推广标准（特别是Function＃bind）
//但是，它不会很快被删除
jQuery.proxy = function（fn，context）{
	var tmp，args，proxy;

	if（typeof context ===“string”）{
		tmp = fn [context];
		context = fn;
		fn = tmp;
	}

	//在规范中快速检查以确定目标是否可调用
	//这会抛出一个TypeError，但我们只返回undefined。
	if（！isFunction（fn））{
		返回undefined;
	}

	//模拟绑定
	args = slice.call（arguments，2）;
	proxy = function（）{
		return fn.apply（context || this，args.concat（slice.call（arguments）））;
	};

	//将唯一处理程序的guid设置为原始处理程序的guid，以便可以将其删除
	proxy.guid = fn.guid = fn.guid || jQuery.guid ++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		！isNaN（obj  -  parseFloat（obj））;
};




//注册为命名的AMD模块，因为jQuery可以与其他模块连接
//可能使用define的文件，但不能通过适当的连接脚本
//了解匿名AMD模块。名为AMD的安全且最强大
//注册方式 使用小写jquery是因为AMD模块名称是
//从文件名派生，jQuery通常以小写形式提供
// 文件名。在创建全局之后执行此操作，以便在AMD模块需要时执行此操作
//调用noConflict来隐藏这个版本的jQuery，它会起作用。

//请注意，为了获得最大的可移植性，不应该是jQuery的库
//将自己声明为匿名模块，并避免设置全局if
// AMD加载程序存在。jQuery是一个特例。有关更多信息，请参阅
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if（typeof define ===“function”&& define.amd）{
	define（“jquery”，[]，function（）{
		return jQuery;
	}）;
}




VAR

	//在覆盖的情况下映射jQuery
	_jQuery = window.jQuery，

	//在覆盖的情况下覆盖$
	_ $ = window。$;

jQuery.noConflict = function（deep）{
	if（window。$ === jQuery）{
		窗口。$ = _ $;
	}

	if（deep && window.jQuery === jQuery）{
		window.jQuery = _jQuery;
	}

	return jQuery;
};

//暴露jQuery和$标识符，即使在AMD中也是如此
//（＃7102＃comment：10，https：//github.com/jquery/jquery/pull/557）
//和浏览器模拟器的CommonJS（＃13566）
if（！noGlobal）{
	window.jQuery = window。$ = jQuery;
}




return jQuery;
}）;