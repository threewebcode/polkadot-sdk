(function() {var type_impls = {
"polkadot_sdk_frame":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RawOrigin%3CAccountId%3E\" class=\"impl\"><a href=\"#impl-RawOrigin%3CAccountId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId&gt; <a class=\"enum\" href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html\" title=\"enum polkadot_sdk_frame::prelude::frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_signed\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html#tymethod.as_signed\" class=\"fn\">as_signed</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;AccountId</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns <code>Some</code> with a reference to the <code>AccountId</code> if <code>self</code> is <code>Signed</code>, <code>None</code> otherwise.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_root\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html#tymethod.is_root\" class=\"fn\">is_root</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if <code>self</code> is <code>Root</code>, <code>None</code> otherwise.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_none\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html#tymethod.is_none\" class=\"fn\">is_none</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if <code>self</code> is <code>None</code>, <code>None</code> otherwise.</p>\n</div></details></div></details>",0,"polkadot_sdk_frame::prelude::frame_system::Origin"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-RawOrigin%3CAccountId%3E\" class=\"impl\"><a href=\"#impl-Decode-for-RawOrigin%3CAccountId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId&gt; <a class=\"trait\" href=\"polkadot_sdk_frame/derive/trait.Decode.html\" title=\"trait polkadot_sdk_frame::derive::Decode\">Decode</a> for <a class=\"enum\" href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html\" title=\"enum polkadot_sdk_frame::prelude::frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;<div class=\"where\">where\n    AccountId: <a class=\"trait\" href=\"polkadot_sdk_frame/derive/trait.Decode.html\" title=\"trait polkadot_sdk_frame::derive::Decode\">Decode</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_sdk_frame/derive/trait.Decode.html#tymethod.decode\" class=\"fn\">decode</a>&lt;__CodecInputEdqy&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html\" title=\"enum polkadot_sdk_frame::prelude::frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;, Error&gt;<div class=\"where\">where\n    __CodecInputEdqy: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_sdk_frame/derive/trait.Decode.html#method.decode_into\" class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.77.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a href=\"polkadot_sdk_frame/derive/trait.Decode.html#method.decode_into\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_sdk_frame/derive/trait.Decode.html#method.skip\" class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a href=\"polkadot_sdk_frame/derive/trait.Decode.html#method.skip\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_sdk_frame/derive/trait.Decode.html#method.encoded_fixed_size\" class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a href=\"polkadot_sdk_frame/derive/trait.Decode.html#method.encoded_fixed_size\">Read more</a></div></details></div></details>","Decode","polkadot_sdk_frame::prelude::frame_system::Origin"],["<section id=\"impl-Eq-for-RawOrigin%3CAccountId%3E\" class=\"impl\"><a href=\"#impl-Eq-for-RawOrigin%3CAccountId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html\" title=\"enum polkadot_sdk_frame::prelude::frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;<div class=\"where\">where\n    AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","polkadot_sdk_frame::prelude::frame_system::Origin"],["<section id=\"impl-StructuralPartialEq-for-RawOrigin%3CAccountId%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-RawOrigin%3CAccountId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html\" title=\"enum polkadot_sdk_frame::prelude::frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;</h3></section>","StructuralPartialEq","polkadot_sdk_frame::prelude::frame_system::Origin"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-RawOrigin%3CAccountId%3E\" class=\"impl\"><a href=\"#impl-Debug-for-RawOrigin%3CAccountId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId&gt; <a class=\"trait\" href=\"polkadot_sdk_frame/derive/trait.Debug.html\" title=\"trait polkadot_sdk_frame::derive::Debug\">Debug</a> for <a class=\"enum\" href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html\" title=\"enum polkadot_sdk_frame::prelude::frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;<div class=\"where\">where\n    AccountId: <a class=\"trait\" href=\"polkadot_sdk_frame/derive/trait.Debug.html\" title=\"trait polkadot_sdk_frame::derive::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_sdk_frame/derive/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"polkadot_sdk_frame/derive/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","polkadot_sdk_frame::prelude::frame_system::Origin"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MaxEncodedLen-for-RawOrigin%3CAccountId%3E\" class=\"impl\"><a href=\"#impl-MaxEncodedLen-for-RawOrigin%3CAccountId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId&gt; MaxEncodedLen for <a class=\"enum\" href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html\" title=\"enum polkadot_sdk_frame::prelude::frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;<div class=\"where\">where\n    AccountId: MaxEncodedLen,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_encoded_len\" class=\"method trait-impl\"><a href=\"#method.max_encoded_len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">max_encoded_len</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Upper bound, in bytes, of the maximum encoded size of this item.</div></details></div></details>","MaxEncodedLen","polkadot_sdk_frame::prelude::frame_system::Origin"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-RawOrigin%3CAccountId%3E\" class=\"impl\"><a href=\"#impl-TypeInfo-for-RawOrigin%3CAccountId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId&gt; <a class=\"trait\" href=\"polkadot_sdk_frame/derive/trait.TypeInfo.html\" title=\"trait polkadot_sdk_frame::derive::TypeInfo\">TypeInfo</a> for <a class=\"enum\" href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html\" title=\"enum polkadot_sdk_frame::prelude::frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;<div class=\"where\">where\n    AccountId: <a class=\"trait\" href=\"polkadot_sdk_frame/derive/trait.TypeInfo.html\" title=\"trait polkadot_sdk_frame::derive::TypeInfo\">TypeInfo</a> + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"polkadot_sdk_frame/derive/trait.TypeInfo.html#associatedtype.Identity\" class=\"associatedtype\">Identity</a> = <a class=\"enum\" href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html\" title=\"enum polkadot_sdk_frame::prelude::frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a href=\"polkadot_sdk_frame/derive/trait.TypeInfo.html#associatedtype.Identity\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_sdk_frame/derive/trait.TypeInfo.html#tymethod.type_info\" class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","polkadot_sdk_frame::prelude::frame_system::Origin"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-RawOrigin%3CAccountId%3E\" class=\"impl\"><a href=\"#impl-Clone-for-RawOrigin%3CAccountId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html\" title=\"enum polkadot_sdk_frame::prelude::frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;<div class=\"where\">where\n    AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html\" title=\"enum polkadot_sdk_frame::prelude::frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","polkadot_sdk_frame::prelude::frame_system::Origin"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-RawOrigin%3CAccountId%3E\" class=\"impl\"><a href=\"#impl-Encode-for-RawOrigin%3CAccountId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId&gt; <a class=\"trait\" href=\"polkadot_sdk_frame/derive/trait.Encode.html\" title=\"trait polkadot_sdk_frame::derive::Encode\">Encode</a> for <a class=\"enum\" href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html\" title=\"enum polkadot_sdk_frame::prelude::frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;<div class=\"where\">where\n    AccountId: <a class=\"trait\" href=\"polkadot_sdk_frame/derive/trait.Encode.html\" title=\"trait polkadot_sdk_frame::derive::Encode\">Encode</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_sdk_frame/derive/trait.Encode.html#method.size_hint\" class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a href=\"polkadot_sdk_frame/derive/trait.Encode.html#method.size_hint\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_sdk_frame/derive/trait.Encode.html#method.encode_to\" class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>\n)<div class=\"where\">where\n    __CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_sdk_frame/derive/trait.Encode.html#method.encode\" class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_sdk_frame/derive/trait.Encode.html#method.using_encoded\" class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</div></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_sdk_frame/derive/trait.Encode.html#method.encoded_size\" class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a href=\"polkadot_sdk_frame/derive/trait.Encode.html#method.encoded_size\">Read more</a></div></details></div></details>","Encode","polkadot_sdk_frame::prelude::frame_system::Origin"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3COption%3CAccountId%3E%3E-for-RawOrigin%3CAccountId%3E\" class=\"impl\"><a href=\"#impl-From%3COption%3CAccountId%3E%3E-for-RawOrigin%3CAccountId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;AccountId&gt;&gt; for <a class=\"enum\" href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html\" title=\"enum polkadot_sdk_frame::prelude::frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(s: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;AccountId&gt;) -&gt; <a class=\"enum\" href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html\" title=\"enum polkadot_sdk_frame::prelude::frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Option<AccountId>>","polkadot_sdk_frame::prelude::frame_system::Origin"],["<section id=\"impl-EncodeLike-for-RawOrigin%3CAccountId%3E\" class=\"impl\"><a href=\"#impl-EncodeLike-for-RawOrigin%3CAccountId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId&gt; EncodeLike for <a class=\"enum\" href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html\" title=\"enum polkadot_sdk_frame::prelude::frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;<div class=\"where\">where\n    AccountId: <a class=\"trait\" href=\"polkadot_sdk_frame/derive/trait.Encode.html\" title=\"trait polkadot_sdk_frame::derive::Encode\">Encode</a>,</div></h3></section>","EncodeLike","polkadot_sdk_frame::prelude::frame_system::Origin"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-RawOrigin%3CAccountId%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-RawOrigin%3CAccountId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html\" title=\"enum polkadot_sdk_frame::prelude::frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;<div class=\"where\">where\n    AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"polkadot_sdk_frame/prelude/frame_system/enum.RawOrigin.html\" title=\"enum polkadot_sdk_frame::prelude::frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","polkadot_sdk_frame::prelude::frame_system::Origin"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()