//temporary authentication for testing
const requireAuth = (req, res, next) => {

    req.user = { role: 'staff' };
    return next();
};


const requireAnyRole = (allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !req.user.role) {
            return res.status(401).json({ error: 'Authentication required' });
        }

        if (allowedRoles.includes(req.user.role)) {
            next();
        } else {
            res.status(403).json({ error: 'Insufficient permissions' });
        }
    };
};

module.exports = { requireAuth, requireAnyRole };