/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var provider_pb = require('./provider_pb.js');
goog.exportSymbol('proto.pulumirpc.RegisterResourceOutputsRequest', null, global);
goog.exportSymbol('proto.pulumirpc.RegisterResourceRequest', null, global);
goog.exportSymbol('proto.pulumirpc.RegisterResourceResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pulumirpc.RegisterResourceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulumirpc.RegisterResourceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pulumirpc.RegisterResourceRequest.displayName = 'proto.pulumirpc.RegisterResourceRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pulumirpc.RegisterResourceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pulumirpc.RegisterResourceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulumirpc.RegisterResourceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.RegisterResourceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    parent: jspb.Message.getFieldWithDefault(msg, 3, ""),
    custom: jspb.Message.getFieldWithDefault(msg, 4, false),
    object: (f = msg.getObject()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pulumirpc.RegisterResourceRequest}
 */
proto.pulumirpc.RegisterResourceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulumirpc.RegisterResourceRequest;
  return proto.pulumirpc.RegisterResourceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulumirpc.RegisterResourceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulumirpc.RegisterResourceRequest}
 */
proto.pulumirpc.RegisterResourceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCustom(value);
      break;
    case 5:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setObject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pulumirpc.RegisterResourceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulumirpc.RegisterResourceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulumirpc.RegisterResourceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.RegisterResourceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCustom();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.pulumirpc.RegisterResourceRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.pulumirpc.RegisterResourceRequest.prototype.setType = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.pulumirpc.RegisterResourceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.pulumirpc.RegisterResourceRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string parent = 3;
 * @return {string}
 */
proto.pulumirpc.RegisterResourceRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.pulumirpc.RegisterResourceRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool custom = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.pulumirpc.RegisterResourceRequest.prototype.getCustom = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.pulumirpc.RegisterResourceRequest.prototype.setCustom = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional google.protobuf.Struct object = 5;
 * @return {?proto.google.protobuf.Struct}
 */
proto.pulumirpc.RegisterResourceRequest.prototype.getObject = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 5));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.pulumirpc.RegisterResourceRequest.prototype.setObject = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.pulumirpc.RegisterResourceRequest.prototype.clearObject = function() {
  this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.pulumirpc.RegisterResourceRequest.prototype.hasObject = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pulumirpc.RegisterResourceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulumirpc.RegisterResourceResponse.repeatedFields_, null);
};
goog.inherits(proto.pulumirpc.RegisterResourceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pulumirpc.RegisterResourceResponse.displayName = 'proto.pulumirpc.RegisterResourceResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulumirpc.RegisterResourceResponse.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pulumirpc.RegisterResourceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulumirpc.RegisterResourceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulumirpc.RegisterResourceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.RegisterResourceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    urn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    object: (f = msg.getObject()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    stable: jspb.Message.getFieldWithDefault(msg, 4, false),
    stablesList: jspb.Message.getRepeatedField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pulumirpc.RegisterResourceResponse}
 */
proto.pulumirpc.RegisterResourceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulumirpc.RegisterResourceResponse;
  return proto.pulumirpc.RegisterResourceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulumirpc.RegisterResourceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulumirpc.RegisterResourceResponse}
 */
proto.pulumirpc.RegisterResourceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrn(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setObject(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStable(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addStables(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pulumirpc.RegisterResourceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulumirpc.RegisterResourceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulumirpc.RegisterResourceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.RegisterResourceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getStable();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getStablesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string urn = 1;
 * @return {string}
 */
proto.pulumirpc.RegisterResourceResponse.prototype.getUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.pulumirpc.RegisterResourceResponse.prototype.setUrn = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.pulumirpc.RegisterResourceResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.pulumirpc.RegisterResourceResponse.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct object = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.pulumirpc.RegisterResourceResponse.prototype.getObject = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.pulumirpc.RegisterResourceResponse.prototype.setObject = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.pulumirpc.RegisterResourceResponse.prototype.clearObject = function() {
  this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.pulumirpc.RegisterResourceResponse.prototype.hasObject = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool stable = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.pulumirpc.RegisterResourceResponse.prototype.getStable = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.pulumirpc.RegisterResourceResponse.prototype.setStable = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated string stables = 5;
 * @return {!Array.<string>}
 */
proto.pulumirpc.RegisterResourceResponse.prototype.getStablesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array.<string>} value */
proto.pulumirpc.RegisterResourceResponse.prototype.setStablesList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.pulumirpc.RegisterResourceResponse.prototype.addStables = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.pulumirpc.RegisterResourceResponse.prototype.clearStablesList = function() {
  this.setStablesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pulumirpc.RegisterResourceOutputsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulumirpc.RegisterResourceOutputsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pulumirpc.RegisterResourceOutputsRequest.displayName = 'proto.pulumirpc.RegisterResourceOutputsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pulumirpc.RegisterResourceOutputsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pulumirpc.RegisterResourceOutputsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulumirpc.RegisterResourceOutputsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.RegisterResourceOutputsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    urn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    outputs: (f = msg.getOutputs()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pulumirpc.RegisterResourceOutputsRequest}
 */
proto.pulumirpc.RegisterResourceOutputsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulumirpc.RegisterResourceOutputsRequest;
  return proto.pulumirpc.RegisterResourceOutputsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulumirpc.RegisterResourceOutputsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulumirpc.RegisterResourceOutputsRequest}
 */
proto.pulumirpc.RegisterResourceOutputsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrn(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setOutputs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pulumirpc.RegisterResourceOutputsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulumirpc.RegisterResourceOutputsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulumirpc.RegisterResourceOutputsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.RegisterResourceOutputsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOutputs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string urn = 1;
 * @return {string}
 */
proto.pulumirpc.RegisterResourceOutputsRequest.prototype.getUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.pulumirpc.RegisterResourceOutputsRequest.prototype.setUrn = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct outputs = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.pulumirpc.RegisterResourceOutputsRequest.prototype.getOutputs = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.pulumirpc.RegisterResourceOutputsRequest.prototype.setOutputs = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.pulumirpc.RegisterResourceOutputsRequest.prototype.clearOutputs = function() {
  this.setOutputs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.pulumirpc.RegisterResourceOutputsRequest.prototype.hasOutputs = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.pulumirpc);
