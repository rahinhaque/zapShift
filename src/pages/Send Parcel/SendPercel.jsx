import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendPercel = () => {
  const serviceCenter = useLoaderData();

  // 🔥 useForm MUST be initialized before using watch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Regions list
  const regionsDuplicate = serviceCenter.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  // Watching selected region
  const senderRegion = watch("senderRegion");

  // Function to get districts by region
  const districtsByRegion = (region) => {
    if (!region) return [];
    const districtRegion = serviceCenter.filter((c) => c.region === region);
    return districtRegion.map((d) => d.district);
  };

  const handleSendPercel = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-10">
        <h2 className="text-5xl font-bold">Send A Percel</h2>
        <h2 className="text-3xl font-bold">Enter your percel</h2>
      </div>

      <form
        onSubmit={handleSubmit(handleSendPercel)}
        className="mt-12 p-4 text-black"
      >
        {/* Percel Type */}
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              {...register("percelType")}
              value="document"
              className="radio radio-primary"
              defaultChecked
            />
            Document
          </label>

          <label className="label">
            <input
              type="radio"
              {...register("percelType")}
              value="non-document"
              className="radio radio-primary"
            />
            Non-Document
          </label>
        </div>

        {/* parcel info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("percelName")}
              className="input w-full text-black"
              placeholder="Parcel Name"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Parcel Weight</label>
            <input
              type="number"
              {...register("percelWeight")}
              className="input w-full text-black"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {/* Sender info */}
          <div>
            <h4 className="font-semibold text-2xl mb-4">Sender Details</h4>
            <fieldset className="fieldset">
              <label className="label mt-4">Sender Name</label>
              <input
                type="text"
                {...register("senderName")}
                className="input w-full text-black"
                placeholder="Sender Name"
              />

              <label className="label mt-4">Sender Email</label>
              <input
                type="text"
                {...register("senderEmail")}
                className="input w-full text-black"
                placeholder="Sender Email"
              />

              {/* Region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Region</legend>
                <select
                  defaultValue="Pick a Region"
                  {...register("senderRegion")}
                  className="select"
                >
                  <option disabled>Pick a Region</option>
                  {regions.map((r, index) => (
                    <option key={index} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* District */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender District</legend>
                <select
                  defaultValue="Pick a District"
                  {...register("senderDistrict")}
                  className="select"
                >
                  <option disabled>Pick a District</option>

                  {districtsByRegion(senderRegion).map((d, idx) => (
                    <option key={idx} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>

              <label className="label mt-4">Sender Address</label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input w-full text-black"
                placeholder="Sender Address"
              />

              <label className="label mt-4">Sender Phone Number</label>
              <input
                type="text"
                {...register("senderPhoneNumber")}
                className="input w-full text-black"
                placeholder="Phone Number"
              />

              <label className="label mt-4">Pickup Instruction</label>
              <textarea
                {...register("pickupInstruction")}
                placeholder="Pickup Instruction"
                className="textarea textarea-md w-full"
              ></textarea>
            </fieldset>
          </div>

          {/* Receiver info */}
          <div>
            <h4 className="font-semibold text-2xl mb-4">Receiver Details</h4>
            <fieldset className="fieldset">
              <label className="label mt-4">Receiver Name</label>
              <input
                type="text"
                {...register("receiverName")}
                className="input w-full text-black"
                placeholder="Receiver Name"
              />

              <label className="label mt-4">Receiver Email</label>
              <input
                type="text"
                {...register("receiverEmail")}
                className="input w-full text-black"
                placeholder="Receiver Email"
              />

              {/* Receiver Region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver Region</legend>
                <select
                  defaultValue="Pick a Region"
                  {...register("receiverRegion")}
                  className="select"
                >
                  <option disabled>Pick a Region</option>

                  {regions.map((r, index) => (
                    <option key={index} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              <label className="label mt-4">Receiver Address</label>
              <input
                type="text"
                {...register("receiverAddress")}
                className="input w-full text-black"
                placeholder="Receiver Address"
              />

              <label className="label mt-4">Receiver Phone Number</label>
              <input
                type="text"
                {...register("receiverPhoneNumber")}
                className="input w-full text-black"
                placeholder="Phone Number"
              />

              <label className="label mt-4">Delivery Instruction</label>
              <textarea
                {...register("deliveryInstruction")}
                placeholder="Delivery Instruction"
                className="textarea textarea-md w-full"
              ></textarea>
            </fieldset>
          </div>
        </div>

        <input
          type="submit"
          value="send-percel"
          className="btn btn-primary text-secondary text-shadow-stone-950 w-full mt-3"
        />
      </form>
    </div>
  );
};

export default SendPercel;
