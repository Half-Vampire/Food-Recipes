import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      recipe: {},
      id,
      loading: true,
    };
  }
  async componentDidMount() {
    const url = `https://forkify-api.herokuapp.com/api/get?rId=${this.state.id}`;
    try {
      const prevData = await axios(url);
      // console.log(prevData);
      const recipeActualData = prevData.data.recipe;
      // console.log(recipeActualData);
      this.setState({
        recipe: recipeActualData,
        loading: false,
      });
    } catch (error) {
      alert("error");
    }
  }
  render() {
    const {
      image_url,
      publisher,
      title,
      source_url,
      publisher_url,
      ingredients,
    } = this.state.recipe;
    console.log(this.state.recipe);
    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-uppercase text-orange text-center">
                Loading Recipe...
              </h2>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Link
              to="/recipes"
              className="btn btn-warning mb-5 text-capitalize">
              Back to recipe list
            </Link>
            <img
              src={image_url}
              alt="image_url"
              className="d-block w-100"
              style={{ maxHeight: "30rem" }}
            />
          </div>
          {/* 2nd column */}
          <div className="col-10 mx-auto col-md-6 my-3">
            <h6 className="text-uppercase">{title}</h6>
            <h6 className="text-warning text-capitalize text-slanted">
              {" "}
              Provided by {publisher}
            </h6>
            <a
              href={publisher_url}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-primary mt-2 text-capitalize">
              Publisher webpage
            </a>
            <a
              href={source_url}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-success mt-2 mx-2 text-capitalize">
              Recipe Url
            </a>
            <ul className="list-group mt-4">
              <h2 className="mt-3 mb-4">Ingredients</h2>
              {ingredients.map((item, index) => {
                return (
                  <li key={index} className="list-group-item text-slanted">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
