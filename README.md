# PersonaCare

In the evolving landscape of healthcare, the integration of multimodal artificial intelligence (AI) and natural language processing (NLP) technologies has opened new avenues for personalized and efficient patient care. Our endeavor revolves around the development of a cutting-edge smart health consultant chatbot that leverages advanced language models and electronic health record (EHR) data to enhance the diagnostic and interactive capabilities of healthcare systems.

The foundation of our chatbot lies in the utilization of EHR records as raw input, allowing for a comprehensive understanding of the patient's medical history and current health status. This serves as a crucial initial step, enabling our chatbot to tailor its responses and recommendations based on individualized patient data.

To achieve a nuanced understanding of the user's medical condition, we employ state-of-the-art language models, specifically Large Language Models (LLM). These models are adept at processing vast amounts of textual data and extracting meaningful insights related to disease diagnostics. In particular, our integration with the OPENAI LLM model, enhanced by the llama index, serves as a reliable and robust **retrieval augmented generation (RAG)** for our system. This not only ensures accuracy in disease information retrieval but also provides a solid foundation for subsequent interactions.

The core of our innovation lies in the interactive chat experience that unfolds between the chatbot and the patient. This dynamic interaction allows patients to articulate their queries in natural language, fostering a more user-friendly and accessible healthcare experience. Furthermore, our chatbot incorporates an **emotion classification** module, discerning the emotional state conveyed by the patient's input. This crucial component ensures that responses are not only accurate but also tailored to the patient's emotional context, preventing information overload and promoting a more empathetic interaction.

![Model Overview](<EHR Data.jpg>)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
