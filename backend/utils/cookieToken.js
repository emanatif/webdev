const cookieToken = (user, res) => {
    const token = user.getJwtToken();

    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true, // makes the token available only to backend
        secure: process.env.NODE_ENV === 'production',  // Only send over HTTPS in production
        sameSite: 'none' // Allow cross-origin requests
    };

    user.password = undefined; // Don't send password in the response
    res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user
    });
};
