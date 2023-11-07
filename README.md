# Project Overview
In this project, I conducted a Time-Series Analysis of the Craigslist Vehicles Dataset. The dataset can be found on Kaggle at Craigslist Vehicles Dataset.

The primary goal was to understand and visualize the temporal patterns within the dataset and gain insights into the demand and supply dynamics of vehicles across different regions and vehicle types.

## Project Steps
1. Handling Missing Values
I started the project by addressing missing values within the dataset. For numerical columns, I filled in missing values with the median, and for categorical columns, I used the mode to replace missing values. This step was essential to ensure that the data was clean and ready for analysis.

2. Data Type Correction
I made sure that the data types of the columns were appropriate. In particular, I converted the 'posting_date' column to a datetime data type. This allowed me to utilize time-related information effectively in the analysis.

3. Creating a DateTime Index
I utilized the 'posting_date' column to create a datetime index for the dataset. This index facilitated the analysis of temporal patterns and trends, making it easier to explore how vehicle listings change.

4. Data Exploration
With clean data and a datetime index in place, I explored data using various visualizations and statistical analysis techniques. This step was crucial for gaining insights into temporal patterns, identifying seasonal trends, and analyzing demand-supply dynamics by region and vehicle type. I visualized the data using line charts, histograms, and other relevant plots to reveal insights from the dataset.

5. Building the Time-Series Chart
The core of the project was the creation of a time-series chart. This chart visually represented the temporal patterns and trends within the Craigslist Vehicles Dataset, allowing for a clear understanding of how vehicle listings evolved.

6. GitHub Repository
This repo contains Jupyter notebooks. The dataset was too large to push here. I documented the entire process through each of the steps, making it easy for others to understand the methodology I followed in the analysis.

### Conclusion
This project involved cleaning, analyzing, and visualizing the Craigslist Vehicles Dataset using time-series analysis techniques. It provided valuable insights into the temporal patterns, seasonal trends, and demand-supply dynamics of vehicles based on the data.
