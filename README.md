![view on npm](http://img.shields.io/npm/v/example.svg)](https://www.npmjs.org/package/example)

## Modules

<dl>
<dt><a href="#module_PeerBitField">PeerBitField</a></dt>
<dd><p>Represents the pieces that a peer has been successfully downloaded.</p>
</dd>
<dt><a href="#module_PeerCancel">PeerCancel</a></dt>
<dd><p>Cancels a specific block request.</p>
</dd>
<dt><a href="#module_PeerChoke">PeerChoke</a></dt>
<dd><p>Requests that a peer stops requesting pieces.</p>
</dd>
<dt><a href="#module_PeerExtended">PeerExtended</a></dt>
<dd><p>Wraps an extended peer message.</p>
</dd>
<dt><a href="#module_PeerHandshake">PeerHandshake</a></dt>
<dd><p>Represents specifics about the client and protocol that the peer is using.</p>
</dd>
<dt><a href="#module_PeerHave">PeerHave</a></dt>
<dd><p>Represents a piece that a peer has been successfully downloaded.</p>
</dd>
<dt><a href="#module_PeerInterested">PeerInterested</a></dt>
<dd><p>Requests that a peer allows pieces to be requested.</p>
</dd>
<dt><a href="#module_PeerKeepAlive">PeerKeepAlive</a></dt>
<dd><p>Requests that a peer keeps the connection alive.</p>
</dd>
<dt><a href="#module_PeerNotInterested">PeerNotInterested</a></dt>
<dd><p>Informs a peer that pieces will no longer be requested.</p>
</dd>
<dt><a href="#module_PeerPiece">PeerPiece</a></dt>
<dd><p>Contains a blcok of piece requested from a peer.</p>
</dd>
<dt><a href="#module_PeerPort">PeerPort</a></dt>
<dd><p>Informs a peer of a listening DHT port.</p>
</dd>
<dt><a href="#module_PeerRequest">PeerRequest</a></dt>
<dd><p>Requests a piece from a peer.</p>
</dd>
<dt><a href="#module_PeerUnchoke">PeerUnchoke</a></dt>
<dd><p>Informs a peer that it can request pieces.</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#PeerMessageBuilder">PeerMessageBuilder</a></dt>
<dd><p>Base class for a peer message builder.</p>
</dd>
<dt><a href="#PeerMessage">PeerMessage</a></dt>
<dd><p>Base class for a peer message.</p>
</dd>
<dt><a href="#StreamTransform">StreamTransform</a> ⇐ <code>Transform</code></dt>
<dd><p>Processes a socket stream and emits torrent protocol messages.</p>
</dd>
</dl>

<a name="module_PeerBitField"></a>

## PeerBitField
Represents the pieces that a peer has been successfully downloaded.


* [PeerBitField](#module_PeerBitField)
    * [~PeerBitfield](#module_PeerBitField..PeerBitfield) ⇐ [<code>PeerMessage</code>](#PeerMessage)
        * [new PeerBitfield(builder)](#new_module_PeerBitField..PeerBitfield_new)
        * _instance_
            * [.getBitField()](#module_PeerBitField..PeerBitfield+getBitField) ⇒ <code>BitField</code>
            * [.getBitFieldBuffer()](#module_PeerBitField..PeerBitfield+getBitFieldBuffer) ⇒ <code>Buffer</code>
            * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
            * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
        * _static_
            * [.Builder](#module_PeerBitField..PeerBitfield.Builder)
            * [.from(buffer)](#module_PeerBitField..PeerBitfield.from) ⇒ <code>PeerBitfield</code>
    * [~PeerBitfieldBuilder](#module_PeerBitField..PeerBitfieldBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
        * [new PeerBitfieldBuilder()](#new_module_PeerBitField..PeerBitfieldBuilder_new)
        * [.setBitField(buffer)](#module_PeerBitField..PeerBitfieldBuilder+setBitField) ⇒ <code>PeerBitfieldBuilder</code>
        * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="module_PeerBitField..PeerBitfield"></a>

### PeerBitField~PeerBitfield ⇐ [<code>PeerMessage</code>](#PeerMessage)
Represents the pieces that a peer has been successfully downloaded.

**Kind**: inner class of [<code>PeerBitField</code>](#module_PeerBitField)  
**Extends**: [<code>PeerMessage</code>](#PeerMessage)  

* [~PeerBitfield](#module_PeerBitField..PeerBitfield) ⇐ [<code>PeerMessage</code>](#PeerMessage)
    * [new PeerBitfield(builder)](#new_module_PeerBitField..PeerBitfield_new)
    * _instance_
        * [.getBitField()](#module_PeerBitField..PeerBitfield+getBitField) ⇒ <code>BitField</code>
        * [.getBitFieldBuffer()](#module_PeerBitField..PeerBitfield+getBitFieldBuffer) ⇒ <code>Buffer</code>
        * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
        * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
    * _static_
        * [.Builder](#module_PeerBitField..PeerBitfield.Builder)
        * [.from(buffer)](#module_PeerBitField..PeerBitfield.from) ⇒ <code>PeerBitfield</code>

<a name="new_module_PeerBitField..PeerBitfield_new"></a>

#### new PeerBitfield(builder)
Constructs a new instance from a builder.


| Param | Type |
| --- | --- |
| builder | <code>PeerBitfieldBuilder</code> | 

<a name="module_PeerBitField..PeerBitfield+getBitField"></a>

#### peerBitfield.getBitField() ⇒ <code>BitField</code>
Gets the bitfield values.

**Kind**: instance method of [<code>PeerBitfield</code>](#module_PeerBitField..PeerBitfield)  
<a name="module_PeerBitField..PeerBitfield+getBitFieldBuffer"></a>

#### peerBitfield.getBitFieldBuffer() ⇒ <code>Buffer</code>
Gets the bitfield values as a buffer.

**Kind**: instance method of [<code>PeerBitfield</code>](#module_PeerBitField..PeerBitfield)  
<a name="PeerMessage+getType"></a>

#### peerBitfield.getType() ⇒ <code>MessageType</code>
Gets the type of the message.

**Kind**: instance method of [<code>PeerBitfield</code>](#module_PeerBitField..PeerBitfield)  
<a name="PeerMessage+toBuffer"></a>

#### peerBitfield.toBuffer() ⇒ <code>Buffer</code>
Returns a new buffer representing the class.

**Kind**: instance method of [<code>PeerBitfield</code>](#module_PeerBitField..PeerBitfield)  
**Overrides**: [<code>toBuffer</code>](#PeerMessage+toBuffer)  
<a name="module_PeerBitField..PeerBitfield.Builder"></a>

#### PeerBitfield.Builder
Gets a reference to the builder class.

**Kind**: static property of [<code>PeerBitfield</code>](#module_PeerBitField..PeerBitfield)  
<a name="module_PeerBitField..PeerBitfield.from"></a>

#### PeerBitfield.from(buffer) ⇒ <code>PeerBitfield</code>
Constructs a new instance from a buffer.

**Kind**: static method of [<code>PeerBitfield</code>](#module_PeerBitField..PeerBitfield)  

| Param | Type |
| --- | --- |
| buffer | <code>Buffer</code> | 

<a name="module_PeerBitField..PeerBitfieldBuilder"></a>

### PeerBitField~PeerBitfieldBuilder ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
Builder class for creating a new PeerBitfield message.

**Kind**: inner class of [<code>PeerBitField</code>](#module_PeerBitField)  
**Extends**: [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)  

* [~PeerBitfieldBuilder](#module_PeerBitField..PeerBitfieldBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
    * [new PeerBitfieldBuilder()](#new_module_PeerBitField..PeerBitfieldBuilder_new)
    * [.setBitField(buffer)](#module_PeerBitField..PeerBitfieldBuilder+setBitField) ⇒ <code>PeerBitfieldBuilder</code>
    * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="new_module_PeerBitField..PeerBitfieldBuilder_new"></a>

#### new PeerBitfieldBuilder()
Constructs a new instance of the builder.

<a name="module_PeerBitField..PeerBitfieldBuilder+setBitField"></a>

#### peerBitfieldBuilder.setBitField(buffer) ⇒ <code>PeerBitfieldBuilder</code>
Sets the bitfield values.

**Kind**: instance method of [<code>PeerBitfieldBuilder</code>](#module_PeerBitField..PeerBitfieldBuilder)  

| Param | Type |
| --- | --- |
| buffer | <code>Buffer</code> | 

<a name="PeerMessageBuilder+build"></a>

#### peerBitfieldBuilder.build() ⇒ <code>?</code>
Returns a new message instance populated from the builder.

**Kind**: instance method of [<code>PeerBitfieldBuilder</code>](#module_PeerBitField..PeerBitfieldBuilder)  
<a name="module_PeerCancel"></a>

## PeerCancel
Cancels a specific block request.


* [PeerCancel](#module_PeerCancel)
    * [~PeerCancel](#module_PeerCancel..PeerCancel) ⇐ [<code>PeerMessage</code>](#PeerMessage)
        * [new PeerCancel(builder)](#new_module_PeerCancel..PeerCancel_new)
        * _instance_
            * [.getIndex()](#module_PeerCancel..PeerCancel+getIndex) ⇒ <code>Number</code>
            * [.getBegin()](#module_PeerCancel..PeerCancel+getBegin) ⇒ <code>Number</code>
            * [.getLength()](#module_PeerCancel..PeerCancel+getLength) ⇒ <code>Number</code>
            * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
            * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
        * _static_
            * [.Builder](#module_PeerCancel..PeerCancel.Builder)
            * [.from(buffer)](#module_PeerCancel..PeerCancel.from) ⇒ <code>PeerCancel</code>
    * [~PeerCancelBuilder](#module_PeerCancel..PeerCancelBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
        * [new PeerCancelBuilder()](#new_module_PeerCancel..PeerCancelBuilder_new)
        * [.setIndex(index)](#module_PeerCancel..PeerCancelBuilder+setIndex) ⇒ <code>PeerCancelBuilder</code>
        * [.setBegin(begin)](#module_PeerCancel..PeerCancelBuilder+setBegin) ⇒ <code>PeerCancelBuilder</code>
        * [.setLength(length)](#module_PeerCancel..PeerCancelBuilder+setLength) ⇒ <code>PeerCancelBuilder</code>
        * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="module_PeerCancel..PeerCancel"></a>

### PeerCancel~PeerCancel ⇐ [<code>PeerMessage</code>](#PeerMessage)
Cancels a specific block request.

**Kind**: inner class of [<code>PeerCancel</code>](#module_PeerCancel)  
**Extends**: [<code>PeerMessage</code>](#PeerMessage)  

* [~PeerCancel](#module_PeerCancel..PeerCancel) ⇐ [<code>PeerMessage</code>](#PeerMessage)
    * [new PeerCancel(builder)](#new_module_PeerCancel..PeerCancel_new)
    * _instance_
        * [.getIndex()](#module_PeerCancel..PeerCancel+getIndex) ⇒ <code>Number</code>
        * [.getBegin()](#module_PeerCancel..PeerCancel+getBegin) ⇒ <code>Number</code>
        * [.getLength()](#module_PeerCancel..PeerCancel+getLength) ⇒ <code>Number</code>
        * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
        * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
    * _static_
        * [.Builder](#module_PeerCancel..PeerCancel.Builder)
        * [.from(buffer)](#module_PeerCancel..PeerCancel.from) ⇒ <code>PeerCancel</code>

<a name="new_module_PeerCancel..PeerCancel_new"></a>

#### new PeerCancel(builder)
Constructs a new instance from a builder.


| Param | Type |
| --- | --- |
| builder | <code>PeerCancelBuilder</code> | 

<a name="module_PeerCancel..PeerCancel+getIndex"></a>

#### peerCancel.getIndex() ⇒ <code>Number</code>
Gets the index value.

**Kind**: instance method of [<code>PeerCancel</code>](#module_PeerCancel..PeerCancel)  
<a name="module_PeerCancel..PeerCancel+getBegin"></a>

#### peerCancel.getBegin() ⇒ <code>Number</code>
Gets the begin value.

**Kind**: instance method of [<code>PeerCancel</code>](#module_PeerCancel..PeerCancel)  
<a name="module_PeerCancel..PeerCancel+getLength"></a>

#### peerCancel.getLength() ⇒ <code>Number</code>
Gets the length value.

**Kind**: instance method of [<code>PeerCancel</code>](#module_PeerCancel..PeerCancel)  
<a name="PeerMessage+getType"></a>

#### peerCancel.getType() ⇒ <code>MessageType</code>
Gets the type of the message.

**Kind**: instance method of [<code>PeerCancel</code>](#module_PeerCancel..PeerCancel)  
<a name="PeerMessage+toBuffer"></a>

#### peerCancel.toBuffer() ⇒ <code>Buffer</code>
Returns a new buffer representing the class.

**Kind**: instance method of [<code>PeerCancel</code>](#module_PeerCancel..PeerCancel)  
**Overrides**: [<code>toBuffer</code>](#PeerMessage+toBuffer)  
<a name="module_PeerCancel..PeerCancel.Builder"></a>

#### PeerCancel.Builder
Gets a reference to the builder class.

**Kind**: static property of [<code>PeerCancel</code>](#module_PeerCancel..PeerCancel)  
<a name="module_PeerCancel..PeerCancel.from"></a>

#### PeerCancel.from(buffer) ⇒ <code>PeerCancel</code>
Constructs a new instance from a buffer.

**Kind**: static method of [<code>PeerCancel</code>](#module_PeerCancel..PeerCancel)  

| Param | Type |
| --- | --- |
| buffer | <code>Buffer</code> | 

<a name="module_PeerCancel..PeerCancelBuilder"></a>

### PeerCancel~PeerCancelBuilder ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
Builder class for creating a new PeerCancel message.

**Kind**: inner class of [<code>PeerCancel</code>](#module_PeerCancel)  
**Extends**: [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)  

* [~PeerCancelBuilder](#module_PeerCancel..PeerCancelBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
    * [new PeerCancelBuilder()](#new_module_PeerCancel..PeerCancelBuilder_new)
    * [.setIndex(index)](#module_PeerCancel..PeerCancelBuilder+setIndex) ⇒ <code>PeerCancelBuilder</code>
    * [.setBegin(begin)](#module_PeerCancel..PeerCancelBuilder+setBegin) ⇒ <code>PeerCancelBuilder</code>
    * [.setLength(length)](#module_PeerCancel..PeerCancelBuilder+setLength) ⇒ <code>PeerCancelBuilder</code>
    * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="new_module_PeerCancel..PeerCancelBuilder_new"></a>

#### new PeerCancelBuilder()
Constructs a new instance of the builder.

<a name="module_PeerCancel..PeerCancelBuilder+setIndex"></a>

#### peerCancelBuilder.setIndex(index) ⇒ <code>PeerCancelBuilder</code>
Sets the index value.

**Kind**: instance method of [<code>PeerCancelBuilder</code>](#module_PeerCancel..PeerCancelBuilder)  

| Param | Type |
| --- | --- |
| index | <code>Number</code> | 

<a name="module_PeerCancel..PeerCancelBuilder+setBegin"></a>

#### peerCancelBuilder.setBegin(begin) ⇒ <code>PeerCancelBuilder</code>
Sets the begin value.

**Kind**: instance method of [<code>PeerCancelBuilder</code>](#module_PeerCancel..PeerCancelBuilder)  

| Param | Type |
| --- | --- |
| begin | <code>Number</code> | 

<a name="module_PeerCancel..PeerCancelBuilder+setLength"></a>

#### peerCancelBuilder.setLength(length) ⇒ <code>PeerCancelBuilder</code>
Sets the length value.

**Kind**: instance method of [<code>PeerCancelBuilder</code>](#module_PeerCancel..PeerCancelBuilder)  

| Param | Type |
| --- | --- |
| length | <code>Number</code> | 

<a name="PeerMessageBuilder+build"></a>

#### peerCancelBuilder.build() ⇒ <code>?</code>
Returns a new message instance populated from the builder.

**Kind**: instance method of [<code>PeerCancelBuilder</code>](#module_PeerCancel..PeerCancelBuilder)  
<a name="module_PeerChoke"></a>

## PeerChoke
Requests that a peer stops requesting pieces.


* [PeerChoke](#module_PeerChoke)
    * [~PeerChoke](#module_PeerChoke..PeerChoke) ⇐ [<code>PeerMessage</code>](#PeerMessage)
        * [new PeerChoke(builder)](#new_module_PeerChoke..PeerChoke_new)
        * _instance_
            * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
            * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
        * _static_
            * [.Builder](#module_PeerChoke..PeerChoke.Builder)
            * [.from(buffer)](#module_PeerChoke..PeerChoke.from) ⇒ <code>PeerChoke</code>
    * [~PeerChokeBuilder](#module_PeerChoke..PeerChokeBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
        * [new PeerChokeBuilder()](#new_module_PeerChoke..PeerChokeBuilder_new)
        * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="module_PeerChoke..PeerChoke"></a>

### PeerChoke~PeerChoke ⇐ [<code>PeerMessage</code>](#PeerMessage)
Requests that a peer stops requesting pieces.

**Kind**: inner class of [<code>PeerChoke</code>](#module_PeerChoke)  
**Extends**: [<code>PeerMessage</code>](#PeerMessage)  

* [~PeerChoke](#module_PeerChoke..PeerChoke) ⇐ [<code>PeerMessage</code>](#PeerMessage)
    * [new PeerChoke(builder)](#new_module_PeerChoke..PeerChoke_new)
    * _instance_
        * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
        * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
    * _static_
        * [.Builder](#module_PeerChoke..PeerChoke.Builder)
        * [.from(buffer)](#module_PeerChoke..PeerChoke.from) ⇒ <code>PeerChoke</code>

<a name="new_module_PeerChoke..PeerChoke_new"></a>

#### new PeerChoke(builder)
Constructs a new instance from a builder.


| Param | Type |
| --- | --- |
| builder | <code>PeerChokeBuilder</code> | 

<a name="PeerMessage+getType"></a>

#### peerChoke.getType() ⇒ <code>MessageType</code>
Gets the type of the message.

**Kind**: instance method of [<code>PeerChoke</code>](#module_PeerChoke..PeerChoke)  
<a name="PeerMessage+toBuffer"></a>

#### peerChoke.toBuffer() ⇒ <code>Buffer</code>
Returns a new buffer representing the class.

**Kind**: instance method of [<code>PeerChoke</code>](#module_PeerChoke..PeerChoke)  
<a name="module_PeerChoke..PeerChoke.Builder"></a>

#### PeerChoke.Builder
Gets a reference to the builder class.

**Kind**: static property of [<code>PeerChoke</code>](#module_PeerChoke..PeerChoke)  
<a name="module_PeerChoke..PeerChoke.from"></a>

#### PeerChoke.from(buffer) ⇒ <code>PeerChoke</code>
Constructs a new instance from a buffer.

**Kind**: static method of [<code>PeerChoke</code>](#module_PeerChoke..PeerChoke)  

| Param | Type |
| --- | --- |
| buffer | <code>Buffer</code> | 

<a name="module_PeerChoke..PeerChokeBuilder"></a>

### PeerChoke~PeerChokeBuilder ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
Builder class for creating a new PeerChoke message.

**Kind**: inner class of [<code>PeerChoke</code>](#module_PeerChoke)  
**Extends**: [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)  

* [~PeerChokeBuilder](#module_PeerChoke..PeerChokeBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
    * [new PeerChokeBuilder()](#new_module_PeerChoke..PeerChokeBuilder_new)
    * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="new_module_PeerChoke..PeerChokeBuilder_new"></a>

#### new PeerChokeBuilder()
Constructs a new instance of the builder.

<a name="PeerMessageBuilder+build"></a>

#### peerChokeBuilder.build() ⇒ <code>?</code>
Returns a new message instance populated from the builder.

**Kind**: instance method of [<code>PeerChokeBuilder</code>](#module_PeerChoke..PeerChokeBuilder)  
<a name="module_PeerExtended"></a>

## PeerExtended
Wraps an extended peer message.


* [PeerExtended](#module_PeerExtended)
    * [~PeerExtended](#module_PeerExtended..PeerExtended) ⇐ [<code>PeerMessage</code>](#PeerMessage)
        * [new PeerExtended(builder)](#new_module_PeerExtended..PeerExtended_new)
        * _instance_
            * [.getExtendedType()](#module_PeerExtended..PeerExtended+getExtendedType) ⇒ <code>Number</code>
            * [.getExtendedPayload()](#module_PeerExtended..PeerExtended+getExtendedPayload) ⇒ <code>Buffer</code>
            * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
            * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
        * _static_
            * [.Builder](#module_PeerExtended..PeerExtended.Builder)
            * [.from(buffer)](#module_PeerExtended..PeerExtended.from) ⇒ <code>PeerExtended</code>
    * [~PeerExtendedBuilder](#module_PeerExtended..PeerExtendedBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
        * [new PeerExtendedBuilder()](#new_module_PeerExtended..PeerExtendedBuilder_new)
        * [.setExtendedPayload(payload)](#module_PeerExtended..PeerExtendedBuilder+setExtendedPayload) ⇒ <code>PeerExtendedBuilder</code>
        * [.setExtendedType(type)](#module_PeerExtended..PeerExtendedBuilder+setExtendedType) ⇒ <code>PeerExtendedBuilder</code>
        * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="module_PeerExtended..PeerExtended"></a>

### PeerExtended~PeerExtended ⇐ [<code>PeerMessage</code>](#PeerMessage)
Wraps an extended peer message.

**Kind**: inner class of [<code>PeerExtended</code>](#module_PeerExtended)  
**Extends**: [<code>PeerMessage</code>](#PeerMessage)  

* [~PeerExtended](#module_PeerExtended..PeerExtended) ⇐ [<code>PeerMessage</code>](#PeerMessage)
    * [new PeerExtended(builder)](#new_module_PeerExtended..PeerExtended_new)
    * _instance_
        * [.getExtendedType()](#module_PeerExtended..PeerExtended+getExtendedType) ⇒ <code>Number</code>
        * [.getExtendedPayload()](#module_PeerExtended..PeerExtended+getExtendedPayload) ⇒ <code>Buffer</code>
        * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
        * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
    * _static_
        * [.Builder](#module_PeerExtended..PeerExtended.Builder)
        * [.from(buffer)](#module_PeerExtended..PeerExtended.from) ⇒ <code>PeerExtended</code>

<a name="new_module_PeerExtended..PeerExtended_new"></a>

#### new PeerExtended(builder)
Constructs a new instance from a builder.


| Param | Type |
| --- | --- |
| builder | <code>PeerExtendedBuilder</code> | 

<a name="module_PeerExtended..PeerExtended+getExtendedType"></a>

#### peerExtended.getExtendedType() ⇒ <code>Number</code>
Gets the extended type.

**Kind**: instance method of [<code>PeerExtended</code>](#module_PeerExtended..PeerExtended)  
<a name="module_PeerExtended..PeerExtended+getExtendedPayload"></a>

#### peerExtended.getExtendedPayload() ⇒ <code>Buffer</code>
Gets the extended payload.

**Kind**: instance method of [<code>PeerExtended</code>](#module_PeerExtended..PeerExtended)  
<a name="PeerMessage+getType"></a>

#### peerExtended.getType() ⇒ <code>MessageType</code>
Gets the type of the message.

**Kind**: instance method of [<code>PeerExtended</code>](#module_PeerExtended..PeerExtended)  
<a name="PeerMessage+toBuffer"></a>

#### peerExtended.toBuffer() ⇒ <code>Buffer</code>
Returns a new buffer representing the class.

**Kind**: instance method of [<code>PeerExtended</code>](#module_PeerExtended..PeerExtended)  
**Overrides**: [<code>toBuffer</code>](#PeerMessage+toBuffer)  
<a name="module_PeerExtended..PeerExtended.Builder"></a>

#### PeerExtended.Builder
Gets a reference to the builder class.

**Kind**: static property of [<code>PeerExtended</code>](#module_PeerExtended..PeerExtended)  
<a name="module_PeerExtended..PeerExtended.from"></a>

#### PeerExtended.from(buffer) ⇒ <code>PeerExtended</code>
Constructs a new instance from a buffer.

**Kind**: static method of [<code>PeerExtended</code>](#module_PeerExtended..PeerExtended)  

| Param | Type |
| --- | --- |
| buffer | <code>Buffer</code> | 

<a name="module_PeerExtended..PeerExtendedBuilder"></a>

### PeerExtended~PeerExtendedBuilder ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
Builder class for creating a new PeerExtended message.

**Kind**: inner class of [<code>PeerExtended</code>](#module_PeerExtended)  
**Extends**: [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)  

* [~PeerExtendedBuilder](#module_PeerExtended..PeerExtendedBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
    * [new PeerExtendedBuilder()](#new_module_PeerExtended..PeerExtendedBuilder_new)
    * [.setExtendedPayload(payload)](#module_PeerExtended..PeerExtendedBuilder+setExtendedPayload) ⇒ <code>PeerExtendedBuilder</code>
    * [.setExtendedType(type)](#module_PeerExtended..PeerExtendedBuilder+setExtendedType) ⇒ <code>PeerExtendedBuilder</code>
    * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="new_module_PeerExtended..PeerExtendedBuilder_new"></a>

#### new PeerExtendedBuilder()
Constructs a new instance of the builder.

<a name="module_PeerExtended..PeerExtendedBuilder+setExtendedPayload"></a>

#### peerExtendedBuilder.setExtendedPayload(payload) ⇒ <code>PeerExtendedBuilder</code>
Sets the extended payload.

**Kind**: instance method of [<code>PeerExtendedBuilder</code>](#module_PeerExtended..PeerExtendedBuilder)  

| Param | Type |
| --- | --- |
| payload | <code>Buffer</code> | 

<a name="module_PeerExtended..PeerExtendedBuilder+setExtendedType"></a>

#### peerExtendedBuilder.setExtendedType(type) ⇒ <code>PeerExtendedBuilder</code>
Sets the extended type.

**Kind**: instance method of [<code>PeerExtendedBuilder</code>](#module_PeerExtended..PeerExtendedBuilder)  

| Param | Type |
| --- | --- |
| type | <code>Number</code> | 

<a name="PeerMessageBuilder+build"></a>

#### peerExtendedBuilder.build() ⇒ <code>?</code>
Returns a new message instance populated from the builder.

**Kind**: instance method of [<code>PeerExtendedBuilder</code>](#module_PeerExtended..PeerExtendedBuilder)  
<a name="module_PeerHandshake"></a>

## PeerHandshake
Represents specifics about the client and protocol that the peer is using.


* [PeerHandshake](#module_PeerHandshake)
    * [~PeerHandshake](#module_PeerHandshake..PeerHandshake) ⇐ [<code>PeerMessage</code>](#PeerMessage)
        * [new PeerHandshake(builder)](#new_module_PeerHandshake..PeerHandshake_new)
        * _instance_
            * [.getProtocol()](#module_PeerHandshake..PeerHandshake+getProtocol) ⇒ <code>String</code>
            * [.getReserved()](#module_PeerHandshake..PeerHandshake+getReserved) ⇒ <code>Buffer</code>
            * [.getReservedBit()](#module_PeerHandshake..PeerHandshake+getReservedBit) ⇒ <code>Boolean</code>
            * [.getAzureusMessagingProtocol()](#module_PeerHandshake..PeerHandshake+getAzureusMessagingProtocol) ⇒ <code>Boolean</code>
            * [.getBitTorrentLocationAwareProtocol()](#module_PeerHandshake..PeerHandshake+getBitTorrentLocationAwareProtocol) ⇒ <code>Boolean</code>
            * [.getLibtorrentExtensionProtocol()](#module_PeerHandshake..PeerHandshake+getLibtorrentExtensionProtocol) ⇒ <code>Boolean</code>
            * [.getBitTorrentDHT()](#module_PeerHandshake..PeerHandshake+getBitTorrentDHT) ⇒ <code>Boolean</code>
            * [.getFastExtensions()](#module_PeerHandshake..PeerHandshake+getFastExtensions) ⇒ <code>Boolean</code>
            * [.getNATTraversal()](#module_PeerHandshake..PeerHandshake+getNATTraversal) ⇒ <code>Boolean</code>
            * [.getHybridLegacyV2Upgrade()](#module_PeerHandshake..PeerHandshake+getHybridLegacyV2Upgrade) ⇒ <code>Boolean</code>
            * [.getInfoHash()](#module_PeerHandshake..PeerHandshake+getInfoHash) ⇒ <code>String</code>
            * [.getPeerId()](#module_PeerHandshake..PeerHandshake+getPeerId) ⇒ <code>String</code>
            * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
            * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
        * _static_
            * [.Builder](#module_PeerHandshake..PeerHandshake.Builder)
            * [.from(buffer)](#module_PeerHandshake..PeerHandshake.from) ⇒ <code>PeerHandshake</code>
    * [~PeerHandshakeBuilder](#module_PeerHandshake..PeerHandshakeBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
        * [new PeerHandshakeBuilder()](#new_module_PeerHandshake..PeerHandshakeBuilder_new)
        * [.setProtocol(protocol)](#module_PeerHandshake..PeerHandshakeBuilder+setProtocol) ⇒ <code>PeerHandshakeBuilder</code>
        * [.setReserved(reserved)](#module_PeerHandshake..PeerHandshakeBuilder+setReserved) ⇒ <code>PeerHandshakeBuilder</code>
        * [.setReservedBit(byteIndex, bitIndex, enabled)](#module_PeerHandshake..PeerHandshakeBuilder+setReservedBit) ⇒ <code>PeerHandshakeBuilder</code>
        * [.setAzureusMessagingProtocol(enabled)](#module_PeerHandshake..PeerHandshakeBuilder+setAzureusMessagingProtocol) ⇒ <code>PeerHandshakeBuilder</code>
        * [.setBitTorrentLocationAwareProtocol(enabled)](#module_PeerHandshake..PeerHandshakeBuilder+setBitTorrentLocationAwareProtocol) ⇒ <code>PeerHandshakeBuilder</code>
        * [.setLibtorrentExtensionProtocol(enabled)](#module_PeerHandshake..PeerHandshakeBuilder+setLibtorrentExtensionProtocol) ⇒ <code>PeerHandshakeBuilder</code>
        * [.setBitTorrentDHT(enabled)](#module_PeerHandshake..PeerHandshakeBuilder+setBitTorrentDHT) ⇒ <code>PeerHandshakeBuilder</code>
        * [.setFastExtensions(enabled)](#module_PeerHandshake..PeerHandshakeBuilder+setFastExtensions) ⇒ <code>PeerHandshakeBuilder</code>
        * [.setNATTraversal(enabled)](#module_PeerHandshake..PeerHandshakeBuilder+setNATTraversal) ⇒ <code>PeerHandshakeBuilder</code>
        * [.setHybridLegacyV2Upgrade(enabled)](#module_PeerHandshake..PeerHandshakeBuilder+setHybridLegacyV2Upgrade) ⇒ <code>PeerHandshakeBuilder</code>
        * [.setInfoHash(infoHash)](#module_PeerHandshake..PeerHandshakeBuilder+setInfoHash) ⇒ <code>PeerHandshakeBuilder</code>
        * [.setPeerId(infoHash)](#module_PeerHandshake..PeerHandshakeBuilder+setPeerId) ⇒ <code>PeerHandshakeBuilder</code>
        * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="module_PeerHandshake..PeerHandshake"></a>

### PeerHandshake~PeerHandshake ⇐ [<code>PeerMessage</code>](#PeerMessage)
Represents specifics about the client and protocol that the peer is using.

**Kind**: inner class of [<code>PeerHandshake</code>](#module_PeerHandshake)  
**Extends**: [<code>PeerMessage</code>](#PeerMessage)  

* [~PeerHandshake](#module_PeerHandshake..PeerHandshake) ⇐ [<code>PeerMessage</code>](#PeerMessage)
    * [new PeerHandshake(builder)](#new_module_PeerHandshake..PeerHandshake_new)
    * _instance_
        * [.getProtocol()](#module_PeerHandshake..PeerHandshake+getProtocol) ⇒ <code>String</code>
        * [.getReserved()](#module_PeerHandshake..PeerHandshake+getReserved) ⇒ <code>Buffer</code>
        * [.getReservedBit()](#module_PeerHandshake..PeerHandshake+getReservedBit) ⇒ <code>Boolean</code>
        * [.getAzureusMessagingProtocol()](#module_PeerHandshake..PeerHandshake+getAzureusMessagingProtocol) ⇒ <code>Boolean</code>
        * [.getBitTorrentLocationAwareProtocol()](#module_PeerHandshake..PeerHandshake+getBitTorrentLocationAwareProtocol) ⇒ <code>Boolean</code>
        * [.getLibtorrentExtensionProtocol()](#module_PeerHandshake..PeerHandshake+getLibtorrentExtensionProtocol) ⇒ <code>Boolean</code>
        * [.getBitTorrentDHT()](#module_PeerHandshake..PeerHandshake+getBitTorrentDHT) ⇒ <code>Boolean</code>
        * [.getFastExtensions()](#module_PeerHandshake..PeerHandshake+getFastExtensions) ⇒ <code>Boolean</code>
        * [.getNATTraversal()](#module_PeerHandshake..PeerHandshake+getNATTraversal) ⇒ <code>Boolean</code>
        * [.getHybridLegacyV2Upgrade()](#module_PeerHandshake..PeerHandshake+getHybridLegacyV2Upgrade) ⇒ <code>Boolean</code>
        * [.getInfoHash()](#module_PeerHandshake..PeerHandshake+getInfoHash) ⇒ <code>String</code>
        * [.getPeerId()](#module_PeerHandshake..PeerHandshake+getPeerId) ⇒ <code>String</code>
        * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
        * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
    * _static_
        * [.Builder](#module_PeerHandshake..PeerHandshake.Builder)
        * [.from(buffer)](#module_PeerHandshake..PeerHandshake.from) ⇒ <code>PeerHandshake</code>

<a name="new_module_PeerHandshake..PeerHandshake_new"></a>

#### new PeerHandshake(builder)
Constructs a new instance from a builder.


| Param | Type |
| --- | --- |
| builder | <code>PeerHandshakeBuilder</code> | 

<a name="module_PeerHandshake..PeerHandshake+getProtocol"></a>

#### peerHandshake.getProtocol() ⇒ <code>String</code>
Gets the protocol.

**Kind**: instance method of [<code>PeerHandshake</code>](#module_PeerHandshake..PeerHandshake)  
<a name="module_PeerHandshake..PeerHandshake+getReserved"></a>

#### peerHandshake.getReserved() ⇒ <code>Buffer</code>
Gets the reserved bits buffer.

**Kind**: instance method of [<code>PeerHandshake</code>](#module_PeerHandshake..PeerHandshake)  
<a name="module_PeerHandshake..PeerHandshake+getReservedBit"></a>

#### peerHandshake.getReservedBit() ⇒ <code>Boolean</code>
Gets the state of a single reserved bit.

**Kind**: instance method of [<code>PeerHandshake</code>](#module_PeerHandshake..PeerHandshake)  
<a name="module_PeerHandshake..PeerHandshake+getAzureusMessagingProtocol"></a>

#### peerHandshake.getAzureusMessagingProtocol() ⇒ <code>Boolean</code>
Gets Azureus Messaging Protocol support.

**Kind**: instance method of [<code>PeerHandshake</code>](#module_PeerHandshake..PeerHandshake)  
<a name="module_PeerHandshake..PeerHandshake+getBitTorrentLocationAwareProtocol"></a>

#### peerHandshake.getBitTorrentLocationAwareProtocol() ⇒ <code>Boolean</code>
Gets BitTorrent Location-aware Protocol support.

**Kind**: instance method of [<code>PeerHandshake</code>](#module_PeerHandshake..PeerHandshake)  
<a name="module_PeerHandshake..PeerHandshake+getLibtorrentExtensionProtocol"></a>

#### peerHandshake.getLibtorrentExtensionProtocol() ⇒ <code>Boolean</code>
Gets Libtorrent Extension Protocol support.

**Kind**: instance method of [<code>PeerHandshake</code>](#module_PeerHandshake..PeerHandshake)  
<a name="module_PeerHandshake..PeerHandshake+getBitTorrentDHT"></a>

#### peerHandshake.getBitTorrentDHT() ⇒ <code>Boolean</code>
Gets BitTorrent DHT support.

**Kind**: instance method of [<code>PeerHandshake</code>](#module_PeerHandshake..PeerHandshake)  
<a name="module_PeerHandshake..PeerHandshake+getFastExtensions"></a>

#### peerHandshake.getFastExtensions() ⇒ <code>Boolean</code>
Gets Fast Extensions support.

**Kind**: instance method of [<code>PeerHandshake</code>](#module_PeerHandshake..PeerHandshake)  
<a name="module_PeerHandshake..PeerHandshake+getNATTraversal"></a>

#### peerHandshake.getNATTraversal() ⇒ <code>Boolean</code>
Gets NAT Traversal support.

**Kind**: instance method of [<code>PeerHandshake</code>](#module_PeerHandshake..PeerHandshake)  
<a name="module_PeerHandshake..PeerHandshake+getHybridLegacyV2Upgrade"></a>

#### peerHandshake.getHybridLegacyV2Upgrade() ⇒ <code>Boolean</code>
Gets Hybrid Legacy V2 Upgrade support.

**Kind**: instance method of [<code>PeerHandshake</code>](#module_PeerHandshake..PeerHandshake)  
<a name="module_PeerHandshake..PeerHandshake+getInfoHash"></a>

#### peerHandshake.getInfoHash() ⇒ <code>String</code>
Gets the info hash.

**Kind**: instance method of [<code>PeerHandshake</code>](#module_PeerHandshake..PeerHandshake)  
<a name="module_PeerHandshake..PeerHandshake+getPeerId"></a>

#### peerHandshake.getPeerId() ⇒ <code>String</code>
Gets the peer id.

**Kind**: instance method of [<code>PeerHandshake</code>](#module_PeerHandshake..PeerHandshake)  
<a name="PeerMessage+getType"></a>

#### peerHandshake.getType() ⇒ <code>MessageType</code>
Gets the type of the message.

**Kind**: instance method of [<code>PeerHandshake</code>](#module_PeerHandshake..PeerHandshake)  
<a name="PeerMessage+toBuffer"></a>

#### peerHandshake.toBuffer() ⇒ <code>Buffer</code>
Returns a new buffer representing the class.

**Kind**: instance method of [<code>PeerHandshake</code>](#module_PeerHandshake..PeerHandshake)  
**Overrides**: [<code>toBuffer</code>](#PeerMessage+toBuffer)  
<a name="module_PeerHandshake..PeerHandshake.Builder"></a>

#### PeerHandshake.Builder
Gets a reference to the builder class.

**Kind**: static property of [<code>PeerHandshake</code>](#module_PeerHandshake..PeerHandshake)  
<a name="module_PeerHandshake..PeerHandshake.from"></a>

#### PeerHandshake.from(buffer) ⇒ <code>PeerHandshake</code>
Constructs a new instance from a buffer.

**Kind**: static method of [<code>PeerHandshake</code>](#module_PeerHandshake..PeerHandshake)  

| Param | Type |
| --- | --- |
| buffer | <code>Buffer</code> | 

<a name="module_PeerHandshake..PeerHandshakeBuilder"></a>

### PeerHandshake~PeerHandshakeBuilder ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
Builder class for creating a new PeerHandshake message.

**Kind**: inner class of [<code>PeerHandshake</code>](#module_PeerHandshake)  
**Extends**: [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)  

* [~PeerHandshakeBuilder](#module_PeerHandshake..PeerHandshakeBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
    * [new PeerHandshakeBuilder()](#new_module_PeerHandshake..PeerHandshakeBuilder_new)
    * [.setProtocol(protocol)](#module_PeerHandshake..PeerHandshakeBuilder+setProtocol) ⇒ <code>PeerHandshakeBuilder</code>
    * [.setReserved(reserved)](#module_PeerHandshake..PeerHandshakeBuilder+setReserved) ⇒ <code>PeerHandshakeBuilder</code>
    * [.setReservedBit(byteIndex, bitIndex, enabled)](#module_PeerHandshake..PeerHandshakeBuilder+setReservedBit) ⇒ <code>PeerHandshakeBuilder</code>
    * [.setAzureusMessagingProtocol(enabled)](#module_PeerHandshake..PeerHandshakeBuilder+setAzureusMessagingProtocol) ⇒ <code>PeerHandshakeBuilder</code>
    * [.setBitTorrentLocationAwareProtocol(enabled)](#module_PeerHandshake..PeerHandshakeBuilder+setBitTorrentLocationAwareProtocol) ⇒ <code>PeerHandshakeBuilder</code>
    * [.setLibtorrentExtensionProtocol(enabled)](#module_PeerHandshake..PeerHandshakeBuilder+setLibtorrentExtensionProtocol) ⇒ <code>PeerHandshakeBuilder</code>
    * [.setBitTorrentDHT(enabled)](#module_PeerHandshake..PeerHandshakeBuilder+setBitTorrentDHT) ⇒ <code>PeerHandshakeBuilder</code>
    * [.setFastExtensions(enabled)](#module_PeerHandshake..PeerHandshakeBuilder+setFastExtensions) ⇒ <code>PeerHandshakeBuilder</code>
    * [.setNATTraversal(enabled)](#module_PeerHandshake..PeerHandshakeBuilder+setNATTraversal) ⇒ <code>PeerHandshakeBuilder</code>
    * [.setHybridLegacyV2Upgrade(enabled)](#module_PeerHandshake..PeerHandshakeBuilder+setHybridLegacyV2Upgrade) ⇒ <code>PeerHandshakeBuilder</code>
    * [.setInfoHash(infoHash)](#module_PeerHandshake..PeerHandshakeBuilder+setInfoHash) ⇒ <code>PeerHandshakeBuilder</code>
    * [.setPeerId(infoHash)](#module_PeerHandshake..PeerHandshakeBuilder+setPeerId) ⇒ <code>PeerHandshakeBuilder</code>
    * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="new_module_PeerHandshake..PeerHandshakeBuilder_new"></a>

#### new PeerHandshakeBuilder()
Constructs a new instance of the builder.

<a name="module_PeerHandshake..PeerHandshakeBuilder+setProtocol"></a>

#### peerHandshakeBuilder.setProtocol(protocol) ⇒ <code>PeerHandshakeBuilder</code>
Sets the protocol.

**Kind**: instance method of [<code>PeerHandshakeBuilder</code>](#module_PeerHandshake..PeerHandshakeBuilder)  

| Param | Type |
| --- | --- |
| protocol | <code>String</code> | 

<a name="module_PeerHandshake..PeerHandshakeBuilder+setReserved"></a>

#### peerHandshakeBuilder.setReserved(reserved) ⇒ <code>PeerHandshakeBuilder</code>
Sets the reserved bits.

**Kind**: instance method of [<code>PeerHandshakeBuilder</code>](#module_PeerHandshake..PeerHandshakeBuilder)  

| Param | Type |
| --- | --- |
| reserved | <code>Buffer</code> | 

<a name="module_PeerHandshake..PeerHandshakeBuilder+setReservedBit"></a>

#### peerHandshakeBuilder.setReservedBit(byteIndex, bitIndex, enabled) ⇒ <code>PeerHandshakeBuilder</code>
Sets a single reserved reserved bit.

**Kind**: instance method of [<code>PeerHandshakeBuilder</code>](#module_PeerHandshake..PeerHandshakeBuilder)  

| Param | Type |
| --- | --- |
| byteIndex | <code>Number</code> | 
| bitIndex | <code>Number</code> | 
| enabled | <code>Boolean</code> | 

<a name="module_PeerHandshake..PeerHandshakeBuilder+setAzureusMessagingProtocol"></a>

#### peerHandshakeBuilder.setAzureusMessagingProtocol(enabled) ⇒ <code>PeerHandshakeBuilder</code>
Sets Azureus Messaging Protocol support.

**Kind**: instance method of [<code>PeerHandshakeBuilder</code>](#module_PeerHandshake..PeerHandshakeBuilder)  

| Param | Type |
| --- | --- |
| enabled | <code>Boolean</code> | 

<a name="module_PeerHandshake..PeerHandshakeBuilder+setBitTorrentLocationAwareProtocol"></a>

#### peerHandshakeBuilder.setBitTorrentLocationAwareProtocol(enabled) ⇒ <code>PeerHandshakeBuilder</code>
Sets BitTorrent Location-aware Protocol support.

**Kind**: instance method of [<code>PeerHandshakeBuilder</code>](#module_PeerHandshake..PeerHandshakeBuilder)  

| Param | Type |
| --- | --- |
| enabled | <code>Boolean</code> | 

<a name="module_PeerHandshake..PeerHandshakeBuilder+setLibtorrentExtensionProtocol"></a>

#### peerHandshakeBuilder.setLibtorrentExtensionProtocol(enabled) ⇒ <code>PeerHandshakeBuilder</code>
Sets Libtorrent Extension Protocol support.

**Kind**: instance method of [<code>PeerHandshakeBuilder</code>](#module_PeerHandshake..PeerHandshakeBuilder)  

| Param | Type |
| --- | --- |
| enabled | <code>Boolean</code> | 

<a name="module_PeerHandshake..PeerHandshakeBuilder+setBitTorrentDHT"></a>

#### peerHandshakeBuilder.setBitTorrentDHT(enabled) ⇒ <code>PeerHandshakeBuilder</code>
Sets BitTorrent DHT support.

**Kind**: instance method of [<code>PeerHandshakeBuilder</code>](#module_PeerHandshake..PeerHandshakeBuilder)  

| Param | Type |
| --- | --- |
| enabled | <code>Boolean</code> | 

<a name="module_PeerHandshake..PeerHandshakeBuilder+setFastExtensions"></a>

#### peerHandshakeBuilder.setFastExtensions(enabled) ⇒ <code>PeerHandshakeBuilder</code>
Sets Fast Extensions support.

**Kind**: instance method of [<code>PeerHandshakeBuilder</code>](#module_PeerHandshake..PeerHandshakeBuilder)  

| Param | Type |
| --- | --- |
| enabled | <code>Boolean</code> | 

<a name="module_PeerHandshake..PeerHandshakeBuilder+setNATTraversal"></a>

#### peerHandshakeBuilder.setNATTraversal(enabled) ⇒ <code>PeerHandshakeBuilder</code>
Sets NAT Traversal support.

**Kind**: instance method of [<code>PeerHandshakeBuilder</code>](#module_PeerHandshake..PeerHandshakeBuilder)  

| Param | Type |
| --- | --- |
| enabled | <code>Boolean</code> | 

<a name="module_PeerHandshake..PeerHandshakeBuilder+setHybridLegacyV2Upgrade"></a>

#### peerHandshakeBuilder.setHybridLegacyV2Upgrade(enabled) ⇒ <code>PeerHandshakeBuilder</code>
Sets Hybrid Legacy V2 Upgrade support.

**Kind**: instance method of [<code>PeerHandshakeBuilder</code>](#module_PeerHandshake..PeerHandshakeBuilder)  

| Param | Type |
| --- | --- |
| enabled | <code>Boolean</code> | 

<a name="module_PeerHandshake..PeerHandshakeBuilder+setInfoHash"></a>

#### peerHandshakeBuilder.setInfoHash(infoHash) ⇒ <code>PeerHandshakeBuilder</code>
Sets the info hash.

**Kind**: instance method of [<code>PeerHandshakeBuilder</code>](#module_PeerHandshake..PeerHandshakeBuilder)  

| Param | Type |
| --- | --- |
| infoHash | <code>String</code> | 

<a name="module_PeerHandshake..PeerHandshakeBuilder+setPeerId"></a>

#### peerHandshakeBuilder.setPeerId(infoHash) ⇒ <code>PeerHandshakeBuilder</code>
Sets the peer id.

**Kind**: instance method of [<code>PeerHandshakeBuilder</code>](#module_PeerHandshake..PeerHandshakeBuilder)  

| Param | Type |
| --- | --- |
| infoHash | <code>String</code> | 

<a name="PeerMessageBuilder+build"></a>

#### peerHandshakeBuilder.build() ⇒ <code>?</code>
Returns a new message instance populated from the builder.

**Kind**: instance method of [<code>PeerHandshakeBuilder</code>](#module_PeerHandshake..PeerHandshakeBuilder)  
<a name="module_PeerHave"></a>

## PeerHave
Represents a piece that a peer has been successfully downloaded.


* [PeerHave](#module_PeerHave)
    * [~PeerHave](#module_PeerHave..PeerHave) ⇐ [<code>PeerMessage</code>](#PeerMessage)
        * [new PeerHave(builder)](#new_module_PeerHave..PeerHave_new)
        * _instance_
            * [.getIndex()](#module_PeerHave..PeerHave+getIndex) ⇒ <code>Number</code>
            * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
            * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
        * _static_
            * [.Builder](#module_PeerHave..PeerHave.Builder)
            * [.from(buffer)](#module_PeerHave..PeerHave.from) ⇒ <code>PeerHave</code>
    * [~PeerHaveBuilder](#module_PeerHave..PeerHaveBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
        * [new PeerHaveBuilder()](#new_module_PeerHave..PeerHaveBuilder_new)
        * [.setIndex(index)](#module_PeerHave..PeerHaveBuilder+setIndex) ⇒ <code>PeerHaveBuilder</code>
        * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="module_PeerHave..PeerHave"></a>

### PeerHave~PeerHave ⇐ [<code>PeerMessage</code>](#PeerMessage)
Represents a piece that a peer has been successfully downloaded.

**Kind**: inner class of [<code>PeerHave</code>](#module_PeerHave)  
**Extends**: [<code>PeerMessage</code>](#PeerMessage)  

* [~PeerHave](#module_PeerHave..PeerHave) ⇐ [<code>PeerMessage</code>](#PeerMessage)
    * [new PeerHave(builder)](#new_module_PeerHave..PeerHave_new)
    * _instance_
        * [.getIndex()](#module_PeerHave..PeerHave+getIndex) ⇒ <code>Number</code>
        * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
        * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
    * _static_
        * [.Builder](#module_PeerHave..PeerHave.Builder)
        * [.from(buffer)](#module_PeerHave..PeerHave.from) ⇒ <code>PeerHave</code>

<a name="new_module_PeerHave..PeerHave_new"></a>

#### new PeerHave(builder)
Constructs a new instance from a builder.


| Param | Type |
| --- | --- |
| builder | <code>PeerHaveBuilder</code> | 

<a name="module_PeerHave..PeerHave+getIndex"></a>

#### peerHave.getIndex() ⇒ <code>Number</code>
Gets the index value.

**Kind**: instance method of [<code>PeerHave</code>](#module_PeerHave..PeerHave)  
<a name="PeerMessage+getType"></a>

#### peerHave.getType() ⇒ <code>MessageType</code>
Gets the type of the message.

**Kind**: instance method of [<code>PeerHave</code>](#module_PeerHave..PeerHave)  
<a name="PeerMessage+toBuffer"></a>

#### peerHave.toBuffer() ⇒ <code>Buffer</code>
Returns a new buffer representing the class.

**Kind**: instance method of [<code>PeerHave</code>](#module_PeerHave..PeerHave)  
**Overrides**: [<code>toBuffer</code>](#PeerMessage+toBuffer)  
<a name="module_PeerHave..PeerHave.Builder"></a>

#### PeerHave.Builder
Gets a reference to the builder class.

**Kind**: static property of [<code>PeerHave</code>](#module_PeerHave..PeerHave)  
<a name="module_PeerHave..PeerHave.from"></a>

#### PeerHave.from(buffer) ⇒ <code>PeerHave</code>
Constructs a new instance from a buffer.

**Kind**: static method of [<code>PeerHave</code>](#module_PeerHave..PeerHave)  

| Param | Type |
| --- | --- |
| buffer | <code>Buffer</code> | 

<a name="module_PeerHave..PeerHaveBuilder"></a>

### PeerHave~PeerHaveBuilder ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
Builder class for creating a new PeerHave message.

**Kind**: inner class of [<code>PeerHave</code>](#module_PeerHave)  
**Extends**: [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)  

* [~PeerHaveBuilder](#module_PeerHave..PeerHaveBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
    * [new PeerHaveBuilder()](#new_module_PeerHave..PeerHaveBuilder_new)
    * [.setIndex(index)](#module_PeerHave..PeerHaveBuilder+setIndex) ⇒ <code>PeerHaveBuilder</code>
    * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="new_module_PeerHave..PeerHaveBuilder_new"></a>

#### new PeerHaveBuilder()
Constructs a new instance of the builder.

<a name="module_PeerHave..PeerHaveBuilder+setIndex"></a>

#### peerHaveBuilder.setIndex(index) ⇒ <code>PeerHaveBuilder</code>
Sets the index value.

**Kind**: instance method of [<code>PeerHaveBuilder</code>](#module_PeerHave..PeerHaveBuilder)  

| Param | Type |
| --- | --- |
| index | <code>Number</code> | 

<a name="PeerMessageBuilder+build"></a>

#### peerHaveBuilder.build() ⇒ <code>?</code>
Returns a new message instance populated from the builder.

**Kind**: instance method of [<code>PeerHaveBuilder</code>](#module_PeerHave..PeerHaveBuilder)  
<a name="module_PeerInterested"></a>

## PeerInterested
Requests that a peer allows pieces to be requested.


* [PeerInterested](#module_PeerInterested)
    * [module.exports](#exp_module_PeerInterested--module.exports) ⇐ [<code>PeerMessage</code>](#PeerMessage) ⏏
        * [new module.exports(builder)](#new_module_PeerInterested--module.exports_new)
        * _instance_
            * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
            * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
        * _static_
            * [.Builder](#module_PeerInterested--module.exports.Builder)
            * [.from(buffer)](#module_PeerInterested--module.exports.from) ⇒ <code>PeerInterested</code>
        * _inner_
            * [~PeerInterestedBuilder](#module_PeerInterested--module.exports..PeerInterestedBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
                * [new PeerInterestedBuilder()](#new_module_PeerInterested--module.exports..PeerInterestedBuilder_new)
                * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="exp_module_PeerInterested--module.exports"></a>

### module.exports ⇐ [<code>PeerMessage</code>](#PeerMessage) ⏏
Requests that a peer allows pieces to be requested.

**Kind**: Exported class  
**Extends**: [<code>PeerMessage</code>](#PeerMessage)  
<a name="new_module_PeerInterested--module.exports_new"></a>

#### new module.exports(builder)
Constructs a new instance from a builder.


| Param | Type |
| --- | --- |
| builder | <code>PeerInterestedBuilder</code> | 

<a name="PeerMessage+getType"></a>

#### module.exports.getType() ⇒ <code>MessageType</code>
Gets the type of the message.

**Kind**: instance method of [<code>module.exports</code>](#exp_module_PeerInterested--module.exports)  
<a name="PeerMessage+toBuffer"></a>

#### module.exports.toBuffer() ⇒ <code>Buffer</code>
Returns a new buffer representing the class.

**Kind**: instance method of [<code>module.exports</code>](#exp_module_PeerInterested--module.exports)  
<a name="module_PeerInterested--module.exports.Builder"></a>

#### module.exports.Builder
Gets a reference to the builder class.

**Kind**: static property of [<code>module.exports</code>](#exp_module_PeerInterested--module.exports)  
<a name="module_PeerInterested--module.exports.from"></a>

#### module.exports.from(buffer) ⇒ <code>PeerInterested</code>
Constructs a new instance from a buffer.

**Kind**: static method of [<code>module.exports</code>](#exp_module_PeerInterested--module.exports)  

| Param | Type |
| --- | --- |
| buffer | <code>Buffer</code> | 

<a name="module_PeerInterested--module.exports..PeerInterestedBuilder"></a>

#### module.exports~PeerInterestedBuilder ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
Builder class for creating a new PeerInterested message.

**Kind**: inner class of [<code>module.exports</code>](#exp_module_PeerInterested--module.exports)  
**Extends**: [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)  

* [~PeerInterestedBuilder](#module_PeerInterested--module.exports..PeerInterestedBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
    * [new PeerInterestedBuilder()](#new_module_PeerInterested--module.exports..PeerInterestedBuilder_new)
    * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="new_module_PeerInterested--module.exports..PeerInterestedBuilder_new"></a>

##### new PeerInterestedBuilder()
Constructs a new instance of the builder.

<a name="PeerMessageBuilder+build"></a>

##### peerInterestedBuilder.build() ⇒ <code>?</code>
Returns a new message instance populated from the builder.

**Kind**: instance method of [<code>PeerInterestedBuilder</code>](#module_PeerInterested--module.exports..PeerInterestedBuilder)  
<a name="module_PeerKeepAlive"></a>

## PeerKeepAlive
Requests that a peer keeps the connection alive.


* [PeerKeepAlive](#module_PeerKeepAlive)
    * [~PeerKeepAlive](#module_PeerKeepAlive..PeerKeepAlive) ⇐ [<code>PeerMessage</code>](#PeerMessage)
        * [new PeerKeepAlive(builder)](#new_module_PeerKeepAlive..PeerKeepAlive_new)
        * _instance_
            * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
            * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
        * _static_
            * [.Builder](#module_PeerKeepAlive..PeerKeepAlive.Builder)
            * [.from(buffer)](#module_PeerKeepAlive..PeerKeepAlive.from) ⇒ <code>PeerKeepAlive</code>
    * [~PeerKeepAliveBuilder](#module_PeerKeepAlive..PeerKeepAliveBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
        * [new PeerKeepAliveBuilder()](#new_module_PeerKeepAlive..PeerKeepAliveBuilder_new)
        * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="module_PeerKeepAlive..PeerKeepAlive"></a>

### PeerKeepAlive~PeerKeepAlive ⇐ [<code>PeerMessage</code>](#PeerMessage)
Requests that a peer keeps the connection alive.

**Kind**: inner class of [<code>PeerKeepAlive</code>](#module_PeerKeepAlive)  
**Extends**: [<code>PeerMessage</code>](#PeerMessage)  

* [~PeerKeepAlive](#module_PeerKeepAlive..PeerKeepAlive) ⇐ [<code>PeerMessage</code>](#PeerMessage)
    * [new PeerKeepAlive(builder)](#new_module_PeerKeepAlive..PeerKeepAlive_new)
    * _instance_
        * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
        * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
    * _static_
        * [.Builder](#module_PeerKeepAlive..PeerKeepAlive.Builder)
        * [.from(buffer)](#module_PeerKeepAlive..PeerKeepAlive.from) ⇒ <code>PeerKeepAlive</code>

<a name="new_module_PeerKeepAlive..PeerKeepAlive_new"></a>

#### new PeerKeepAlive(builder)
Constructs a new instance from a builder.


| Param | Type |
| --- | --- |
| builder | <code>PeerKeepAliveBuilder</code> | 

<a name="PeerMessage+getType"></a>

#### peerKeepAlive.getType() ⇒ <code>MessageType</code>
Gets the type of the message.

**Kind**: instance method of [<code>PeerKeepAlive</code>](#module_PeerKeepAlive..PeerKeepAlive)  
<a name="PeerMessage+toBuffer"></a>

#### peerKeepAlive.toBuffer() ⇒ <code>Buffer</code>
Returns a new buffer representing the class.

**Kind**: instance method of [<code>PeerKeepAlive</code>](#module_PeerKeepAlive..PeerKeepAlive)  
**Overrides**: [<code>toBuffer</code>](#PeerMessage+toBuffer)  
<a name="module_PeerKeepAlive..PeerKeepAlive.Builder"></a>

#### PeerKeepAlive.Builder
Gets a reference to the builder class.

**Kind**: static property of [<code>PeerKeepAlive</code>](#module_PeerKeepAlive..PeerKeepAlive)  
<a name="module_PeerKeepAlive..PeerKeepAlive.from"></a>

#### PeerKeepAlive.from(buffer) ⇒ <code>PeerKeepAlive</code>
Constructs a new instance from a buffer.

**Kind**: static method of [<code>PeerKeepAlive</code>](#module_PeerKeepAlive..PeerKeepAlive)  

| Param | Type |
| --- | --- |
| buffer | <code>Buffer</code> | 

<a name="module_PeerKeepAlive..PeerKeepAliveBuilder"></a>

### PeerKeepAlive~PeerKeepAliveBuilder ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
Builder class for creating a new PeerKeepAlive message.

**Kind**: inner class of [<code>PeerKeepAlive</code>](#module_PeerKeepAlive)  
**Extends**: [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)  

* [~PeerKeepAliveBuilder](#module_PeerKeepAlive..PeerKeepAliveBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
    * [new PeerKeepAliveBuilder()](#new_module_PeerKeepAlive..PeerKeepAliveBuilder_new)
    * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="new_module_PeerKeepAlive..PeerKeepAliveBuilder_new"></a>

#### new PeerKeepAliveBuilder()
Constructs a new instance of the builder.

<a name="PeerMessageBuilder+build"></a>

#### peerKeepAliveBuilder.build() ⇒ <code>?</code>
Returns a new message instance populated from the builder.

**Kind**: instance method of [<code>PeerKeepAliveBuilder</code>](#module_PeerKeepAlive..PeerKeepAliveBuilder)  
<a name="module_PeerNotInterested"></a>

## PeerNotInterested
Informs a peer that pieces will no longer be requested.


* [PeerNotInterested](#module_PeerNotInterested)
    * [~PeerNotInterested](#module_PeerNotInterested..PeerNotInterested) ⇐ [<code>PeerMessage</code>](#PeerMessage)
        * [new PeerNotInterested(builder)](#new_module_PeerNotInterested..PeerNotInterested_new)
        * _instance_
            * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
            * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
        * _static_
            * [.Builder](#module_PeerNotInterested..PeerNotInterested.Builder)
            * [.from(buffer)](#module_PeerNotInterested..PeerNotInterested.from) ⇒ <code>PeerNotInterested</code>
    * [~PeerNotInterestedBuilder](#module_PeerNotInterested..PeerNotInterestedBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
        * [new PeerNotInterestedBuilder()](#new_module_PeerNotInterested..PeerNotInterestedBuilder_new)
        * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="module_PeerNotInterested..PeerNotInterested"></a>

### PeerNotInterested~PeerNotInterested ⇐ [<code>PeerMessage</code>](#PeerMessage)
Informs a peer that pieces will no longer be requested.

**Kind**: inner class of [<code>PeerNotInterested</code>](#module_PeerNotInterested)  
**Extends**: [<code>PeerMessage</code>](#PeerMessage)  

* [~PeerNotInterested](#module_PeerNotInterested..PeerNotInterested) ⇐ [<code>PeerMessage</code>](#PeerMessage)
    * [new PeerNotInterested(builder)](#new_module_PeerNotInterested..PeerNotInterested_new)
    * _instance_
        * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
        * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
    * _static_
        * [.Builder](#module_PeerNotInterested..PeerNotInterested.Builder)
        * [.from(buffer)](#module_PeerNotInterested..PeerNotInterested.from) ⇒ <code>PeerNotInterested</code>

<a name="new_module_PeerNotInterested..PeerNotInterested_new"></a>

#### new PeerNotInterested(builder)
Constructs a new instance from a builder.


| Param | Type |
| --- | --- |
| builder | <code>PeerNotInterestedBuilder</code> | 

<a name="PeerMessage+getType"></a>

#### peerNotInterested.getType() ⇒ <code>MessageType</code>
Gets the type of the message.

**Kind**: instance method of [<code>PeerNotInterested</code>](#module_PeerNotInterested..PeerNotInterested)  
<a name="PeerMessage+toBuffer"></a>

#### peerNotInterested.toBuffer() ⇒ <code>Buffer</code>
Returns a new buffer representing the class.

**Kind**: instance method of [<code>PeerNotInterested</code>](#module_PeerNotInterested..PeerNotInterested)  
<a name="module_PeerNotInterested..PeerNotInterested.Builder"></a>

#### PeerNotInterested.Builder
Gets a reference to the builder class.

**Kind**: static property of [<code>PeerNotInterested</code>](#module_PeerNotInterested..PeerNotInterested)  
<a name="module_PeerNotInterested..PeerNotInterested.from"></a>

#### PeerNotInterested.from(buffer) ⇒ <code>PeerNotInterested</code>
Constructs a new instance from a buffer.

**Kind**: static method of [<code>PeerNotInterested</code>](#module_PeerNotInterested..PeerNotInterested)  

| Param | Type |
| --- | --- |
| buffer | <code>Buffer</code> | 

<a name="module_PeerNotInterested..PeerNotInterestedBuilder"></a>

### PeerNotInterested~PeerNotInterestedBuilder ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
Builder class for creating a new PeerNotInterested message.

**Kind**: inner class of [<code>PeerNotInterested</code>](#module_PeerNotInterested)  
**Extends**: [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)  

* [~PeerNotInterestedBuilder](#module_PeerNotInterested..PeerNotInterestedBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
    * [new PeerNotInterestedBuilder()](#new_module_PeerNotInterested..PeerNotInterestedBuilder_new)
    * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="new_module_PeerNotInterested..PeerNotInterestedBuilder_new"></a>

#### new PeerNotInterestedBuilder()
Constructs a new instance of the builder.

<a name="PeerMessageBuilder+build"></a>

#### peerNotInterestedBuilder.build() ⇒ <code>?</code>
Returns a new message instance populated from the builder.

**Kind**: instance method of [<code>PeerNotInterestedBuilder</code>](#module_PeerNotInterested..PeerNotInterestedBuilder)  
<a name="module_PeerPiece"></a>

## PeerPiece
Contains a blcok of piece requested from a peer.


* [PeerPiece](#module_PeerPiece)
    * [~PeerPiece](#module_PeerPiece..PeerPiece) ⇐ [<code>PeerMessage</code>](#PeerMessage)
        * [new PeerPiece(builder)](#new_module_PeerPiece..PeerPiece_new)
        * _instance_
            * [.getIndex()](#module_PeerPiece..PeerPiece+getIndex) ⇒ <code>Number</code>
            * [.getBegin()](#module_PeerPiece..PeerPiece+getBegin) ⇒ <code>Number</code>
            * [.getBlock()](#module_PeerPiece..PeerPiece+getBlock) ⇒ <code>Buffer</code>
            * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
            * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
        * _static_
            * [.Builder](#module_PeerPiece..PeerPiece.Builder)
            * [.from(buffer)](#module_PeerPiece..PeerPiece.from) ⇒ <code>PeerPiece</code>
    * [~PeerPieceBuilder](#module_PeerPiece..PeerPieceBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
        * [new PeerPieceBuilder()](#new_module_PeerPiece..PeerPieceBuilder_new)
        * [.setIndex(index)](#module_PeerPiece..PeerPieceBuilder+setIndex) ⇒ <code>PeerPieceBuilder</code>
        * [.setBegin(begin)](#module_PeerPiece..PeerPieceBuilder+setBegin) ⇒ <code>PeerPieceBuilder</code>
        * [.setBlock(block)](#module_PeerPiece..PeerPieceBuilder+setBlock) ⇒ <code>PeerPieceBuilder</code>
        * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="module_PeerPiece..PeerPiece"></a>

### PeerPiece~PeerPiece ⇐ [<code>PeerMessage</code>](#PeerMessage)
Contains a blcok of piece requested from a peer.

**Kind**: inner class of [<code>PeerPiece</code>](#module_PeerPiece)  
**Extends**: [<code>PeerMessage</code>](#PeerMessage)  

* [~PeerPiece](#module_PeerPiece..PeerPiece) ⇐ [<code>PeerMessage</code>](#PeerMessage)
    * [new PeerPiece(builder)](#new_module_PeerPiece..PeerPiece_new)
    * _instance_
        * [.getIndex()](#module_PeerPiece..PeerPiece+getIndex) ⇒ <code>Number</code>
        * [.getBegin()](#module_PeerPiece..PeerPiece+getBegin) ⇒ <code>Number</code>
        * [.getBlock()](#module_PeerPiece..PeerPiece+getBlock) ⇒ <code>Buffer</code>
        * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
        * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
    * _static_
        * [.Builder](#module_PeerPiece..PeerPiece.Builder)
        * [.from(buffer)](#module_PeerPiece..PeerPiece.from) ⇒ <code>PeerPiece</code>

<a name="new_module_PeerPiece..PeerPiece_new"></a>

#### new PeerPiece(builder)
Constructs a new instance from a builder.


| Param | Type |
| --- | --- |
| builder | <code>PeerPieceBuilder</code> | 

<a name="module_PeerPiece..PeerPiece+getIndex"></a>

#### peerPiece.getIndex() ⇒ <code>Number</code>
Gets the index value.

**Kind**: instance method of [<code>PeerPiece</code>](#module_PeerPiece..PeerPiece)  
<a name="module_PeerPiece..PeerPiece+getBegin"></a>

#### peerPiece.getBegin() ⇒ <code>Number</code>
Gets the begin value.

**Kind**: instance method of [<code>PeerPiece</code>](#module_PeerPiece..PeerPiece)  
<a name="module_PeerPiece..PeerPiece+getBlock"></a>

#### peerPiece.getBlock() ⇒ <code>Buffer</code>
Gets the block value.

**Kind**: instance method of [<code>PeerPiece</code>](#module_PeerPiece..PeerPiece)  
<a name="PeerMessage+getType"></a>

#### peerPiece.getType() ⇒ <code>MessageType</code>
Gets the type of the message.

**Kind**: instance method of [<code>PeerPiece</code>](#module_PeerPiece..PeerPiece)  
<a name="PeerMessage+toBuffer"></a>

#### peerPiece.toBuffer() ⇒ <code>Buffer</code>
Returns a new buffer representing the class.

**Kind**: instance method of [<code>PeerPiece</code>](#module_PeerPiece..PeerPiece)  
**Overrides**: [<code>toBuffer</code>](#PeerMessage+toBuffer)  
<a name="module_PeerPiece..PeerPiece.Builder"></a>

#### PeerPiece.Builder
Gets a reference to the builder class.

**Kind**: static property of [<code>PeerPiece</code>](#module_PeerPiece..PeerPiece)  
<a name="module_PeerPiece..PeerPiece.from"></a>

#### PeerPiece.from(buffer) ⇒ <code>PeerPiece</code>
Constructs a new instance from a buffer.

**Kind**: static method of [<code>PeerPiece</code>](#module_PeerPiece..PeerPiece)  

| Param | Type |
| --- | --- |
| buffer | <code>Buffer</code> | 

<a name="module_PeerPiece..PeerPieceBuilder"></a>

### PeerPiece~PeerPieceBuilder ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
Builder class for creating a new PeerPiece message.

**Kind**: inner class of [<code>PeerPiece</code>](#module_PeerPiece)  
**Extends**: [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)  

* [~PeerPieceBuilder](#module_PeerPiece..PeerPieceBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
    * [new PeerPieceBuilder()](#new_module_PeerPiece..PeerPieceBuilder_new)
    * [.setIndex(index)](#module_PeerPiece..PeerPieceBuilder+setIndex) ⇒ <code>PeerPieceBuilder</code>
    * [.setBegin(begin)](#module_PeerPiece..PeerPieceBuilder+setBegin) ⇒ <code>PeerPieceBuilder</code>
    * [.setBlock(block)](#module_PeerPiece..PeerPieceBuilder+setBlock) ⇒ <code>PeerPieceBuilder</code>
    * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="new_module_PeerPiece..PeerPieceBuilder_new"></a>

#### new PeerPieceBuilder()
Constructs a new instance of the builder.

<a name="module_PeerPiece..PeerPieceBuilder+setIndex"></a>

#### peerPieceBuilder.setIndex(index) ⇒ <code>PeerPieceBuilder</code>
Sets the index value.

**Kind**: instance method of [<code>PeerPieceBuilder</code>](#module_PeerPiece..PeerPieceBuilder)  

| Param | Type |
| --- | --- |
| index | <code>Number</code> | 

<a name="module_PeerPiece..PeerPieceBuilder+setBegin"></a>

#### peerPieceBuilder.setBegin(begin) ⇒ <code>PeerPieceBuilder</code>
Sets the begin value.

**Kind**: instance method of [<code>PeerPieceBuilder</code>](#module_PeerPiece..PeerPieceBuilder)  

| Param | Type |
| --- | --- |
| begin | <code>Number</code> | 

<a name="module_PeerPiece..PeerPieceBuilder+setBlock"></a>

#### peerPieceBuilder.setBlock(block) ⇒ <code>PeerPieceBuilder</code>
Sets the block value.

**Kind**: instance method of [<code>PeerPieceBuilder</code>](#module_PeerPiece..PeerPieceBuilder)  

| Param | Type |
| --- | --- |
| block | <code>Buffer</code> | 

<a name="PeerMessageBuilder+build"></a>

#### peerPieceBuilder.build() ⇒ <code>?</code>
Returns a new message instance populated from the builder.

**Kind**: instance method of [<code>PeerPieceBuilder</code>](#module_PeerPiece..PeerPieceBuilder)  
<a name="module_PeerPort"></a>

## PeerPort
Informs a peer of a listening DHT port.


* [PeerPort](#module_PeerPort)
    * [~PeerPort](#module_PeerPort..PeerPort) ⇐ [<code>PeerMessage</code>](#PeerMessage)
        * [new PeerPort(builder)](#new_module_PeerPort..PeerPort_new)
        * _instance_
            * [.getPort()](#module_PeerPort..PeerPort+getPort) ⇒ <code>Number</code>
            * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
            * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
        * _static_
            * [.Builder](#module_PeerPort..PeerPort.Builder)
            * [.from(buffer)](#module_PeerPort..PeerPort.from) ⇒ <code>PeerPort</code>
    * [~PeerPortBuilder](#module_PeerPort..PeerPortBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
        * [new PeerPortBuilder()](#new_module_PeerPort..PeerPortBuilder_new)
        * [.setPort(port)](#module_PeerPort..PeerPortBuilder+setPort) ⇒ <code>PeerPortBuilder</code>
        * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="module_PeerPort..PeerPort"></a>

### PeerPort~PeerPort ⇐ [<code>PeerMessage</code>](#PeerMessage)
Informs a peer of a listening DHT port.

**Kind**: inner class of [<code>PeerPort</code>](#module_PeerPort)  
**Extends**: [<code>PeerMessage</code>](#PeerMessage)  

* [~PeerPort](#module_PeerPort..PeerPort) ⇐ [<code>PeerMessage</code>](#PeerMessage)
    * [new PeerPort(builder)](#new_module_PeerPort..PeerPort_new)
    * _instance_
        * [.getPort()](#module_PeerPort..PeerPort+getPort) ⇒ <code>Number</code>
        * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
        * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>
    * _static_
        * [.Builder](#module_PeerPort..PeerPort.Builder)
        * [.from(buffer)](#module_PeerPort..PeerPort.from) ⇒ <code>PeerPort</code>

<a name="new_module_PeerPort..PeerPort_new"></a>

#### new PeerPort(builder)
Constructs a new instance from a builder.


| Param | Type |
| --- | --- |
| builder | <code>PeerPortBuilder</code> | 

<a name="module_PeerPort..PeerPort+getPort"></a>

#### peerPort.getPort() ⇒ <code>Number</code>
Gets the port value.

**Kind**: instance method of [<code>PeerPort</code>](#module_PeerPort..PeerPort)  
<a name="PeerMessage+getType"></a>

#### peerPort.getType() ⇒ <code>MessageType</code>
Gets the type of the message.

**Kind**: instance method of [<code>PeerPort</code>](#module_PeerPort..PeerPort)  
<a name="PeerMessage+toBuffer"></a>

#### peerPort.toBuffer() ⇒ <code>Buffer</code>
Returns a new buffer representing the class.

**Kind**: instance method of [<code>PeerPort</code>](#module_PeerPort..PeerPort)  
**Overrides**: [<code>toBuffer</code>](#PeerMessage+toBuffer)  
<a name="module_PeerPort..PeerPort.Builder"></a>

#### PeerPort.Builder
Gets a reference to the builder class.

**Kind**: static property of [<code>PeerPort</code>](#module_PeerPort..PeerPort)  
<a name="module_PeerPort..PeerPort.from"></a>

#### PeerPort.from(buffer) ⇒ <code>PeerPort</code>
Constructs a new instance from a buffer.

**Kind**: static method of [<code>PeerPort</code>](#module_PeerPort..PeerPort)  

| Param | Type |
| --- | --- |
| buffer | <code>Buffer</code> | 

<a name="module_PeerPort..PeerPortBuilder"></a>

### PeerPort~PeerPortBuilder ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
Builder class for creating a new PeerPort message.

**Kind**: inner class of [<code>PeerPort</code>](#module_PeerPort)  
**Extends**: [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)  

* [~PeerPortBuilder](#module_PeerPort..PeerPortBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
    * [new PeerPortBuilder()](#new_module_PeerPort..PeerPortBuilder_new)
    * [.setPort(port)](#module_PeerPort..PeerPortBuilder+setPort) ⇒ <code>PeerPortBuilder</code>
    * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="new_module_PeerPort..PeerPortBuilder_new"></a>

#### new PeerPortBuilder()
Constructs a new instance of the builder.

<a name="module_PeerPort..PeerPortBuilder+setPort"></a>

#### peerPortBuilder.setPort(port) ⇒ <code>PeerPortBuilder</code>
Sets the port value.

**Kind**: instance method of [<code>PeerPortBuilder</code>](#module_PeerPort..PeerPortBuilder)  

| Param | Type |
| --- | --- |
| port | <code>Number</code> | 

<a name="PeerMessageBuilder+build"></a>

#### peerPortBuilder.build() ⇒ <code>?</code>
Returns a new message instance populated from the builder.

**Kind**: instance method of [<code>PeerPortBuilder</code>](#module_PeerPort..PeerPortBuilder)  
<a name="module_PeerRequest"></a>

## PeerRequest
Requests a piece from a peer.


* [PeerRequest](#module_PeerRequest)
    * [~PeerRequest](#module_PeerRequest..PeerRequest) ⇐ <code>PeerRequest</code>
        * [new PeerRequest(builder)](#new_module_PeerRequest..PeerRequest_new)
        * _instance_
            * [.getIndex()](#module_PeerRequest..PeerRequest+getIndex) ⇒ <code>Number</code>
            * [.getBegin()](#module_PeerRequest..PeerRequest+getBegin) ⇒ <code>Number</code>
            * [.getLength()](#module_PeerRequest..PeerRequest+getLength) ⇒ <code>Number</code>
            * [.toBuffer()](#module_PeerRequest..PeerRequest+toBuffer) ⇒ <code>Buffer</code>
        * _static_
            * [.Builder](#module_PeerRequest..PeerRequest.Builder)
            * [.from(buffer)](#module_PeerRequest..PeerRequest.from) ⇒ <code>PeerRequest</code>
    * [~PeerRequestBuilder](#module_PeerRequest..PeerRequestBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
        * [new PeerRequestBuilder()](#new_module_PeerRequest..PeerRequestBuilder_new)
        * [.setIndex(index)](#module_PeerRequest..PeerRequestBuilder+setIndex) ⇒ <code>PeerRequestBuilder</code>
        * [.setBegin(begin)](#module_PeerRequest..PeerRequestBuilder+setBegin) ⇒ <code>PeerRequestBuilder</code>
        * [.setLength(length)](#module_PeerRequest..PeerRequestBuilder+setLength) ⇒ <code>PeerRequestBuilder</code>
        * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="module_PeerRequest..PeerRequest"></a>

### PeerRequest~PeerRequest ⇐ <code>PeerRequest</code>
Requests a piece from a peer.

**Kind**: inner class of [<code>PeerRequest</code>](#module_PeerRequest)  
**Extends**: <code>PeerRequest</code>  

* [~PeerRequest](#module_PeerRequest..PeerRequest) ⇐ <code>PeerRequest</code>
    * [new PeerRequest(builder)](#new_module_PeerRequest..PeerRequest_new)
    * _instance_
        * [.getIndex()](#module_PeerRequest..PeerRequest+getIndex) ⇒ <code>Number</code>
        * [.getBegin()](#module_PeerRequest..PeerRequest+getBegin) ⇒ <code>Number</code>
        * [.getLength()](#module_PeerRequest..PeerRequest+getLength) ⇒ <code>Number</code>
        * [.toBuffer()](#module_PeerRequest..PeerRequest+toBuffer) ⇒ <code>Buffer</code>
    * _static_
        * [.Builder](#module_PeerRequest..PeerRequest.Builder)
        * [.from(buffer)](#module_PeerRequest..PeerRequest.from) ⇒ <code>PeerRequest</code>

<a name="new_module_PeerRequest..PeerRequest_new"></a>

#### new PeerRequest(builder)
Constructs a new instance from a builder.


| Param | Type |
| --- | --- |
| builder | <code>PeerRequestBuilder</code> | 

<a name="module_PeerRequest..PeerRequest+getIndex"></a>

#### peerRequest.getIndex() ⇒ <code>Number</code>
Gets the index value.

**Kind**: instance method of [<code>PeerRequest</code>](#module_PeerRequest..PeerRequest)  
<a name="module_PeerRequest..PeerRequest+getBegin"></a>

#### peerRequest.getBegin() ⇒ <code>Number</code>
Gets the begin value.

**Kind**: instance method of [<code>PeerRequest</code>](#module_PeerRequest..PeerRequest)  
<a name="module_PeerRequest..PeerRequest+getLength"></a>

#### peerRequest.getLength() ⇒ <code>Number</code>
Gets the length value.

**Kind**: instance method of [<code>PeerRequest</code>](#module_PeerRequest..PeerRequest)  
<a name="module_PeerRequest..PeerRequest+toBuffer"></a>

#### peerRequest.toBuffer() ⇒ <code>Buffer</code>
Returns a new buffer representing the class.

**Kind**: instance method of [<code>PeerRequest</code>](#module_PeerRequest..PeerRequest)  
<a name="module_PeerRequest..PeerRequest.Builder"></a>

#### PeerRequest.Builder
Gets a reference to the builder class.

**Kind**: static property of [<code>PeerRequest</code>](#module_PeerRequest..PeerRequest)  
<a name="module_PeerRequest..PeerRequest.from"></a>

#### PeerRequest.from(buffer) ⇒ <code>PeerRequest</code>
Constructs a new instance from a buffer.

**Kind**: static method of [<code>PeerRequest</code>](#module_PeerRequest..PeerRequest)  

| Param | Type |
| --- | --- |
| buffer | <code>Buffer</code> | 

<a name="module_PeerRequest..PeerRequestBuilder"></a>

### PeerRequest~PeerRequestBuilder ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
Builder class for creating a new PeerRequest message.

**Kind**: inner class of [<code>PeerRequest</code>](#module_PeerRequest)  
**Extends**: [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)  

* [~PeerRequestBuilder](#module_PeerRequest..PeerRequestBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
    * [new PeerRequestBuilder()](#new_module_PeerRequest..PeerRequestBuilder_new)
    * [.setIndex(index)](#module_PeerRequest..PeerRequestBuilder+setIndex) ⇒ <code>PeerRequestBuilder</code>
    * [.setBegin(begin)](#module_PeerRequest..PeerRequestBuilder+setBegin) ⇒ <code>PeerRequestBuilder</code>
    * [.setLength(length)](#module_PeerRequest..PeerRequestBuilder+setLength) ⇒ <code>PeerRequestBuilder</code>
    * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="new_module_PeerRequest..PeerRequestBuilder_new"></a>

#### new PeerRequestBuilder()
Constructs a new instance of the builder.

<a name="module_PeerRequest..PeerRequestBuilder+setIndex"></a>

#### peerRequestBuilder.setIndex(index) ⇒ <code>PeerRequestBuilder</code>
Sets the index value.

**Kind**: instance method of [<code>PeerRequestBuilder</code>](#module_PeerRequest..PeerRequestBuilder)  

| Param | Type |
| --- | --- |
| index | <code>Number</code> | 

<a name="module_PeerRequest..PeerRequestBuilder+setBegin"></a>

#### peerRequestBuilder.setBegin(begin) ⇒ <code>PeerRequestBuilder</code>
Sets the begin value.

**Kind**: instance method of [<code>PeerRequestBuilder</code>](#module_PeerRequest..PeerRequestBuilder)  

| Param | Type |
| --- | --- |
| begin | <code>Number</code> | 

<a name="module_PeerRequest..PeerRequestBuilder+setLength"></a>

#### peerRequestBuilder.setLength(length) ⇒ <code>PeerRequestBuilder</code>
Sets the length value.

**Kind**: instance method of [<code>PeerRequestBuilder</code>](#module_PeerRequest..PeerRequestBuilder)  

| Param | Type |
| --- | --- |
| length | <code>Number</code> | 

<a name="PeerMessageBuilder+build"></a>

#### peerRequestBuilder.build() ⇒ <code>?</code>
Returns a new message instance populated from the builder.

**Kind**: instance method of [<code>PeerRequestBuilder</code>](#module_PeerRequest..PeerRequestBuilder)  
<a name="module_PeerUnchoke"></a>

## PeerUnchoke
Informs a peer that it can request pieces.


* [PeerUnchoke](#module_PeerUnchoke)
    * [~PeerUnchoke](#module_PeerUnchoke..PeerUnchoke) ⇐ <code>PeerRequest</code>
        * [new PeerUnchoke(builder)](#new_module_PeerUnchoke..PeerUnchoke_new)
        * [.Builder](#module_PeerUnchoke..PeerUnchoke.Builder)
        * [.from(buffer)](#module_PeerUnchoke..PeerUnchoke.from) ⇒ <code>PeerUnchoke</code>
    * [~PeerUnchokeBuilder](#module_PeerUnchoke..PeerUnchokeBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
        * [new PeerUnchokeBuilder()](#new_module_PeerUnchoke..PeerUnchokeBuilder_new)
        * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="module_PeerUnchoke..PeerUnchoke"></a>

### PeerUnchoke~PeerUnchoke ⇐ <code>PeerRequest</code>
Informs a peer that it can request pieces.

**Kind**: inner class of [<code>PeerUnchoke</code>](#module_PeerUnchoke)  
**Extends**: <code>PeerRequest</code>  

* [~PeerUnchoke](#module_PeerUnchoke..PeerUnchoke) ⇐ <code>PeerRequest</code>
    * [new PeerUnchoke(builder)](#new_module_PeerUnchoke..PeerUnchoke_new)
    * [.Builder](#module_PeerUnchoke..PeerUnchoke.Builder)
    * [.from(buffer)](#module_PeerUnchoke..PeerUnchoke.from) ⇒ <code>PeerUnchoke</code>

<a name="new_module_PeerUnchoke..PeerUnchoke_new"></a>

#### new PeerUnchoke(builder)
Constructs a new instance from a builder.


| Param | Type |
| --- | --- |
| builder | <code>PeerUnchokeBuilder</code> | 

<a name="module_PeerUnchoke..PeerUnchoke.Builder"></a>

#### PeerUnchoke.Builder
Gets a reference to the builder class.

**Kind**: static property of [<code>PeerUnchoke</code>](#module_PeerUnchoke..PeerUnchoke)  
<a name="module_PeerUnchoke..PeerUnchoke.from"></a>

#### PeerUnchoke.from(buffer) ⇒ <code>PeerUnchoke</code>
Constructs a new instance from a buffer.

**Kind**: static method of [<code>PeerUnchoke</code>](#module_PeerUnchoke..PeerUnchoke)  

| Param | Type |
| --- | --- |
| buffer | <code>Buffer</code> | 

<a name="module_PeerUnchoke..PeerUnchokeBuilder"></a>

### PeerUnchoke~PeerUnchokeBuilder ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
Builder class for creating a new PeerUnchoke message.

**Kind**: inner class of [<code>PeerUnchoke</code>](#module_PeerUnchoke)  
**Extends**: [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)  

* [~PeerUnchokeBuilder](#module_PeerUnchoke..PeerUnchokeBuilder) ⇐ [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)
    * [new PeerUnchokeBuilder()](#new_module_PeerUnchoke..PeerUnchokeBuilder_new)
    * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="new_module_PeerUnchoke..PeerUnchokeBuilder_new"></a>

#### new PeerUnchokeBuilder()
Constructs a new instance of the builder.

<a name="PeerMessageBuilder+build"></a>

#### peerUnchokeBuilder.build() ⇒ <code>?</code>
Returns a new message instance populated from the builder.

**Kind**: instance method of [<code>PeerUnchokeBuilder</code>](#module_PeerUnchoke..PeerUnchokeBuilder)  
<a name="PeerMessageBuilder"></a>

## PeerMessageBuilder
Base class for a peer message builder.

**Kind**: global class  

* [PeerMessageBuilder](#PeerMessageBuilder)
    * [new PeerMessageBuilder(newClass, type)](#new_PeerMessageBuilder_new)
    * [.build()](#PeerMessageBuilder+build) ⇒ <code>?</code>

<a name="new_PeerMessageBuilder_new"></a>

### new PeerMessageBuilder(newClass, type)
Constructs a new builder instance.


| Param | Type |
| --- | --- |
| newClass | <code>?</code> | 
| type | <code>MessageType</code> | 

<a name="PeerMessageBuilder+build"></a>

### peerMessageBuilder.build() ⇒ <code>?</code>
Returns a new message instance populated from the builder.

**Kind**: instance method of [<code>PeerMessageBuilder</code>](#PeerMessageBuilder)  
<a name="PeerMessage"></a>

## PeerMessage
Base class for a peer message.

**Kind**: global class  

* [PeerMessage](#PeerMessage)
    * [new PeerMessage(builder)](#new_PeerMessage_new)
    * [.getType()](#PeerMessage+getType) ⇒ <code>MessageType</code>
    * [.toBuffer()](#PeerMessage+toBuffer) ⇒ <code>Buffer</code>

<a name="new_PeerMessage_new"></a>

### new PeerMessage(builder)
Constructs a new instance of a peer message.


| Param | Type |
| --- | --- |
| builder | [<code>PeerMessageBuilder</code>](#PeerMessageBuilder) | 

<a name="PeerMessage+getType"></a>

### peerMessage.getType() ⇒ <code>MessageType</code>
Gets the type of the message.

**Kind**: instance method of [<code>PeerMessage</code>](#PeerMessage)  
<a name="PeerMessage+toBuffer"></a>

### peerMessage.toBuffer() ⇒ <code>Buffer</code>
Returns a new buffer representing the class.

**Kind**: instance method of [<code>PeerMessage</code>](#PeerMessage)  
<a name="StreamTransform"></a>

## StreamTransform ⇐ <code>Transform</code>
Processes a socket stream and emits torrent protocol messages.

**Kind**: global class  
**Extends**: <code>Transform</code>  
<a name="MessageTypes"></a>

## MessageTypes : <code>enum</code>
Enum of possible message types.

**Kind**: global enum  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| HANDSHAKE | <code>Number</code> | <code>-1</code> | 
| KEEP_ALIVE | <code>Number</code> | <code></code> | 
| CHOKE | <code>Number</code> | <code>0</code> | 
| UNCHOKE | <code>Number</code> | <code>1</code> | 
| INTERESTED | <code>Number</code> | <code>2</code> | 
| NOT_INTERESTED | <code>Number</code> | <code>3</code> | 
| HAVE | <code>Number</code> | <code>4</code> | 
| BITFIELD | <code>Number</code> | <code>5</code> | 
| REQUEST | <code>Number</code> | <code>6</code> | 
| PIECE | <code>Number</code> | <code>7</code> | 
| CANCEL | <code>Number</code> | <code>8</code> | 
| PORT | <code>Number</code> | <code>9</code> | 
| EXTENDED | <code>Number</code> | <code>20</code> | 

