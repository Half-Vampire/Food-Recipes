import React, { Component } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/SearchList";
import { recipeData } from "../data/tempList";
import axios from "axios";

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      recipes: recipeData,
      search: "",
      url: "https://forkify-api.herokuapp.com/api/search?q=pizza",
    };
  }

  async getRecipes() {
    try {
      const res = await axios(this.state.url);
      const actualData = res.data.recipes;
      this.setState({
        recipes: actualData,
      });
      // console.log(actualData);
    } catch (error) {}
  }

  componentDidMount() {
    this.getRecipes();
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // e.stopPropagation();
    // console.log(e.preventDefault);
  };
  render() {
    return (
      <>
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          search={this.state.search}></Search>
        <RecipeList recipes={this.state.recipes}></RecipeList>
      </>
    );
  }
}
