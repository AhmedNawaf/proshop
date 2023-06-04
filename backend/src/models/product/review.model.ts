import mongoose, { InferSchemaType } from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export type TReview = InferSchemaType<typeof reviewSchema>;

const reviewModel = mongoose.model('Review', reviewSchema);

export default reviewModel;
