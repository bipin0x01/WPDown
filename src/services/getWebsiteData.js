// import fetch from "fetch";

const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;

const getThemeInfo = async (formData) => {
  // convert object to json
  try {
    const data = await fetch(`${baseUrl}/theme/info`, {
      method: "post",
      body: formData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    if (res) {
      return res;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getPlugins = async (formData) => {
  try {
    const data = await fetch(`${baseUrl}/plugins`, {
      method: "post",
      body: formData,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await data.json();
    if (res) {
      return res;
    }
  } catch (error) {
    return null;
  }
};

const getThemeDownload = async (formData) => {
  try {
    const data = await fetch(`${baseUrl}/theme/download`, {
      method: "post",
      body: formData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    if (res) {
      return res;
    }
  } catch (error) {
    return null;
  }
};
const getWebsiteData = async (url) => {
  const form = {
    "link": url,
  };
  const formData = JSON.stringify(form);
  try {
    const themeDetails = await getThemeInfo(formData);
    const themeDownload = await getThemeDownload(formData);
    const plugins = await getPlugins(formData);
    // const theme = { themeDetails, themeDownload };
    if (themeDetails && themeDownload && plugins) {
      const res = { themeDetails, themeDownload, plugins };
      return res;
    }
  } catch (error) {
    return null;
  }
};

export { getWebsiteData };
