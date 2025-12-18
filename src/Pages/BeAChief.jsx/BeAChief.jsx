import React from "react";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const BeAChief = () => {
  const { register, handleSubmit } = useForm();
  const requestTypes = ["chef", "admin"];
  const axiosSecure = useAxiosSecure();

  const handleChiefApplication = (data) => {
    console.log(data);
    axiosSecure.post("/chiefs", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your application has been submitted",
          showCancelButton: false,
          timer: 2500,
        });
      }
    });
  };
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-center text-3xl ">Be a Chief</h2>
      <form
        onSubmit={handleSubmit(handleChiefApplication)}
        className="mt-12 p-4 text-black"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="">
            <h4 className="text-3xl font-bold">Chief Details</h4>
            <fieldset className="fieldset">
              {/*  name */}
              <label className="label">Chief Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input w-full"
                placeholder="Sender Name"
              />
              {/*  email */}
              <label className="label">Chief Email</label>
              <input
                type="text"
                {...register("email", { required: true })}
                className="input w-full"
                placeholder="Sender Email"
              />
              {/* Request Type */}
              <label className="label">Request Type</label>
              <select
                {...register("requestType")}
                className="select w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  Select request type
                </option>

                {requestTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </fieldset>
          </div>
        </div>
        <input
          type="submit"
          value="submit"
          className="btn btn-primary mt-8 text-black"
        />
      </form>
    </div>
  );
};

export default BeAChief;
