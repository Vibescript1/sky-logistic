import { useState } from "react";
import { motion } from "framer-motion";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { PageLoader } from "@/components/ui/page-loader";
import { LoadingButton } from "@/components/ui/loading-button";
import { EnhancedSkeleton } from "@/components/ui/enhanced-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LoadingDemo = () => {
  const [showPageLoader, setShowPageLoader] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleButtonClick = () => {
    setButtonLoading(true);
    setTimeout(() => setButtonLoading(false), 3000);
  };

  const handlePageLoaderToggle = () => {
    setShowPageLoader(true);
    setTimeout(() => setShowPageLoader(false), 3000);
  };

  return (
    <div className="container mx-auto p-8 space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Loading Animations Demo
      </motion.h1>

      {/* Loading Spinners */}
      <Card>
        <CardHeader>
          <CardTitle>Loading Spinners</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <LoadingSpinner variant="default" size="lg" />
            <p className="text-sm">Default</p>
          </div>
          <div className="text-center space-y-2">
            <LoadingSpinner variant="pulse" size="lg" />
            <p className="text-sm">Pulse</p>
          </div>
          <div className="text-center space-y-2">
            <LoadingSpinner variant="dots" size="lg" />
            <p className="text-sm">Dots</p>
          </div>
          <div className="text-center space-y-2">
            <LoadingSpinner variant="car" size="lg" />
            <p className="text-sm">Car Theme</p>
          </div>
        </CardContent>
      </Card>

      {/* Loading Buttons */}
      <Card>
        <CardHeader>
          <CardTitle>Loading Buttons</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <LoadingButton
            isLoading={buttonLoading}
            onClick={handleButtonClick}
            loadingText="Processing..."
          >
            Click to Load
          </LoadingButton>
          <Button onClick={handlePageLoaderToggle}>
            Show Page Loader
          </Button>
        </CardContent>
      </Card>

      {/* Skeleton Loading */}
      <Card>
        <CardHeader>
          <CardTitle>Skeleton Loading</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Basic Skeletons</h3>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Enhanced Skeletons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <EnhancedSkeleton variant="card" className="h-32" />
              <EnhancedSkeleton variant="text-block" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Page Loader */}
      <PageLoader 
        isLoading={showPageLoader}
        variant="car"
        message="Loading demo content..."
      />
    </div>
  );
};

export default LoadingDemo;
