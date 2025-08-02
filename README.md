### khata Theme

A clean and responsive Hugo theme designed for documentation and note-taking. Khata is highly customizable and provides a simple, elegant layout to make your content easy to read and navigate.

#### Live Demo

Explore the theme in action by visiting the **[live demo](https://darshanbaral.github.io/khata/)**.

#### Installation

Follow these steps to install and set up the Khata theme for your Hugo site.

1.  **Add the theme as a submodule:** Navigate to your website's root directory and run the following command to add Khata as a Git submodule:
    ```bash
    cd MY_WEBSITE
    git submodule add [https://github.com/darshanbaral/khata](https://github.com/darshanbaral/khata) themes/khata
    ```
2.  **Configure the theme:**
    - **New Site:** If you're starting a new Hugo project, copy the `config.toml` file and the `content` folder from the theme's **[exampleSite folder](https://github.com/darshanbaral/khata/tree/main/exampleSite)** into your website's root directory.
    - **Existing Site:** If you have an existing site, simply set the theme in your `config.toml` file:
      ```toml
      # config.toml
      theme = "khata"
      ```
3.  **Create your content:** Khata uses a folder-based structure for sections. Create new folders within your `content` directory for different sections of your site, then add your documentation pages inside these folders.

> **Note:** The `archive`, `recent`, `search`, and `taxa` folders are special and should only be modified if you are familiar with the theme's structure.

#### Deployment with Search

The Khata theme includes a built-in search feature powered by **[Pagefind](https://pagefind.app/)**. To enable search on your deployed site, you must index your content before deployment.

Run the following command after you've built your site with Hugo:

```bash
hugo -b https://your_base_url/; npx -y pagefind --site public
```

See [github workflow](https://github.com/darshanbaral/khata/blob/main/.github/workflows/deploy.yml) for an example of how to deply the theme.
