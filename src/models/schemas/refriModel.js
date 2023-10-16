import mongoose from 'mongoose';

const refCollection = 'Refrigerators';

const refSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
  },
  thumbnails: {
    type: [String],
    required: false,
  },
  manuals: {
    user_manual: String,
    service_manual: String,
  },
  compressor_motor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Engines',
  },
  refrigerant: {
    name: String,
    quantity: Number,
    suction_pressure: Number,
    discharge_pressure: Number,
  },
  consumption: {
    rla: Number,
    lra: Number,
  },
  components: {
    thermostat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thermostats',
    },
    sensors: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Thermostats',
    },
    defrost_resistance: String,
    fuse: String,
    weather_stripping: String,
    placa: Boolean,
    timer: Boolean,
  },
});

const refrigeratorModel = mongoose.model(refCollection, refSchema);

export default userModel;
