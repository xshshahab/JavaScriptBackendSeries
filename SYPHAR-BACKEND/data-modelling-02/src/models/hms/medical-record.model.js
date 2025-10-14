import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    patientInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
    diagnosis: {
      type: String,
      required: true,
    },
    treatment: {
      type: String,
    },
    visitDate: {
      type: Date,
      default: Date.now,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);
