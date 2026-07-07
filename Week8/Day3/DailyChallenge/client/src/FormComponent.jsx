import React from "react";

function FormComponent(props) {
    const { data, handleChange } = props;

    return (
        <form>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={data.firstName}
                onChange={handleChange}
            />

            <br />

            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={data.lastName}
                onChange={handleChange}
            />

            <br />

            <input
                type="number"
                name="age"
                placeholder="Age"
                value={data.age}
                onChange={handleChange}
            />

            <br />
            <br />

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={data.gender === "male"}
                    onChange={handleChange}
                />
                Male
            </label>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={data.gender === "female"}
                    onChange={handleChange}
                />
                Female
            </label>

            <br />
            <br />

            <select
                name="destination"
                value={data.destination}
                onChange={handleChange}
            >
                <option value="">-- Choose a destination --</option>
                <option value="Japan">Japan</option>
                <option value="Thailand">Thailand</option>
                <option value="Brazil">Brazil</option>
            </select>

            <br />
            <br />

            <label>
                <input
                    type="checkbox"
                    name="lactoseFree"
                    checked={data.lactoseFree}
                    onChange={handleChange}
                />
                Lactose Free
            </label>

            <br />

            <label>
                <input
                    type="checkbox"
                    name="nutsFree"
                    checked={data.nutsFree}
                    onChange={handleChange}
                />
                Nuts Free
            </label>

            <br />

            <label>
                <input
                    type="checkbox"
                    name="vegan"
                    checked={data.vegan}
                    onChange={handleChange}
                />
                Vegan
            </label>

            <hr />

            <h2>Entered information:</h2>

            <p>
                Your name: {data.firstName} {data.lastName}
            </p>

            <p>Your age: {data.age}</p>

            <p>Your gender: {data.gender}</p>

            <p>Your destination: {data.destination}</p>

            <p>
                Your dietary restrictions:
                <br />
                Lactose Free: {data.lactoseFree ? "Yes" : "No"}
                <br />
                Nuts Free: {data.nutsFree ? "Yes" : "No"}
                <br />
                Vegan: {data.vegan ? "Yes" : "No"}
            </p>

            <button type="submit">Submit</button>
        </form>
    );
}

export default FormComponent;